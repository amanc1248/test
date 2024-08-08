const { MongoClient, ObjectId } = require("mongodb");
const xlsx = require("xlsx");
// Define the MongoDB connection string
const mongoUri =
  "mongodb://read:ZC1Ag9NbgGSsB4x6@cluster0-shard-00-00-o6q7l.mongodb.net:27017,cluster0-shard-00-01-o6q7l.mongodb.net:27017,cluster0-shard-00-02-o6q7l.mongodb.net:27017/?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

// Initialize the MongoClient
const client = new MongoClient(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function getDocuments() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Connect to the 'live' database
    const liveDb = client.db("live");

    // Fetch the documents from the loads collection where tenderReferenceNumber exists
    const loads = await liveDb
      .collection("loads")
      .find({
        tenderReferenceNumber: { $exists: true },
        createdAt: {
          $gte: new Date("2024-01-01T00:00:00Z"),
          $lte: new Date("2024-06-14T23:59:59Z"),
        },
        isDeleted: false,
        // carrier: new ObjectId("623a1a0ae85bec6eacd5096d"),
      })
      .toArray();

    // Get the _id values of the loads
    const loadIds = loads.map((load) => load._id);

    // Fetch the related chargegroups documents where isDefault is true
    const chargegroups = await liveDb
      .collection("chargegroups")
      .aggregate([
        {
          $match: {
            loadId: { $in: loadIds },
            isDefault: true,
            status: { $in: ["INVOICED", "PAID"] },
          },
        },
        {
          $lookup: {
            from: "invoices",
            localField: "invoice.invoiceId",
            foreignField: "_id",
            as: "invoiceDetails",
          },
        },
        {
          $addFields: {
            "invoice.totalAmount": { $sum: "$invoiceDetails.totalAmount" },
          },
        },
        {
          $project: {
            invoiceDetails: 0, // Exclude the invoiceDetails array from the result
          },
        },
      ])
      .toArray();

    const foundCharge = chargegroups?.filter(
      (cg) => cg.charge_reference_number === "DL_M105014"
    );

    // Combine the results into a single structure for live data
    const liveData = loads.map((load) => {
      const relatedChargegroups = chargegroups.filter(
        (cg) => cg.loadId + "" === load._id + ""
      );
      return {
        load,
        chargegroups: relatedChargegroups,
      };
    });

    // Connect to the 'shipos' database
    const shiposDb = client.db("shipos");

    // Fetch brokertenders documents from the shipos database using tenderReferenceNumber
    const brokertenders = await shiposDb
      .collection("brokertenders")
      .find({
        drayOSTenderRefNo: {
          $in: loads.map((load) => load.tenderReferenceNumber),
        },
      })
      .toArray();

    // Extract the shiposLoadIds
    const shiposLoadIds = brokertenders.map((bt) => bt.shipLoadId);

    // Fetch the related vendorChargeSets documents
    const vendorChargeSets = await shiposDb
      .collection("vendorchargesets")
      .aggregate([
        {
          $match: {
            loadId: { $in: shiposLoadIds },
            isDefault: true,
          },
        },
        {
          $lookup: {
            from: "bills",
            localField: "bill.billId",
            foreignField: "_id",
            as: "billDetails",
          },
        },
        {
          $addFields: {
            "bill.totalAmount": {
              $sum: {
                $map: {
                  input: "$billDetails",
                  as: "bill",
                  in: "$$bill.totalAmount",
                },
              },
            },
          },
        },
        {
          $project: {
            billDetails: 0, // Exclude the billDetails array from the result
          },
        },
      ])
      .toArray();

    const foundVendorChargeSet = vendorChargeSets.filter(
      (vc) => vc?.charge_reference_number === "DL_M105014"
    );
    // Combine the results into a single structure for shipos data
    const shiposData = brokertenders.map((bt) => {
      const relatedVendorChargeSets = vendorChargeSets.filter((vcs) =>
        vcs.loadId.equals(bt.shipLoadId)
      );
      return {
        brokertender: bt,
        vendorChargeSets: relatedVendorChargeSets,
      };
    });

    let foundInShiposData;
    for (const data of shiposData) {
      const found = data?.vendorChargeSets.filter(
        (vc) => vc.charge_reference_number === "DL_M105014"
      );
      if (found?.length > 0) {
        foundInShiposData = data;
        break;
      }
    }
    // Check for mismatched totalAmount and collect incorrect data
    const incorrectData = [];

    liveData.forEach((live) => {
      live.chargegroups.forEach((cg) => {
        const correspondingBrokertender = brokertenders.find(
          (bt) => bt.drayOSTenderRefNo === live.load.tenderReferenceNumber
        );

        if (correspondingBrokertender) {
          const found =
            correspondingBrokertender.drayOSTenderRefNo === "DL_T103024";
          if (found) {
            console.log(" i am here;");
          }
          const correspondingVendorChargeSet = vendorChargeSets.find((vcs) =>
            vcs.loadId.equals(correspondingBrokertender.shipLoadId)
          );
          if(correspondingVendorChargeSet?.load_reference_number==="DILE_SAV_M104803"){
            console.log("kaskdf")
          }
          if (correspondingVendorChargeSet) {
            if (
              cg.invoice.totalAmount !==
                correspondingVendorChargeSet.bill.totalAmount ||
              cg.totalAmount !== correspondingVendorChargeSet.totalAmount
            ) {
              incorrectData.push({
                liveChargeGroup: {
                  charge_reference_number: cg.charge_reference_number,
                  reference_number: cg.load_reference_number,
                  status: cg.invoice.status,
                  pricing: cg.pricing,
                  totalAmount: cg.totalAmount,
                },
                shiposVendorChargeSet: {
                  charge_reference_number:
                    correspondingVendorChargeSet.charge_reference_number,
                  reference_number:
                    correspondingVendorChargeSet.load_reference_number,
                  status: correspondingVendorChargeSet.bill.status,
                  pricing: correspondingVendorChargeSet.pricing,
                  totalAmount: correspondingVendorChargeSet.totalAmount,
                },
                // liveChargeGroup: cg,
                // shiposVendorChargeSet: correspondingVendorChargeSet,
              });
            }
          }
        }
      });
    });

    console.log("Incorrect Data: ", incorrectData);

    // Convert incorrectData to a format suitable for xlsx
    const formattedData = incorrectData.map((item) => ({
      carriercharge_reference_number:
        item.liveChargeGroup.charge_reference_number,
      carrierreference_number: item.liveChargeGroup.reference_number,
      carriertotalAmount: item.liveChargeGroup.totalAmount,
      broker_charge_reference_number:
        item.shiposVendorChargeSet.charge_reference_number,
      broker_reference_number: item.shiposVendorChargeSet.reference_number,
      broker_totalAmount: item.shiposVendorChargeSet.totalAmount,
    }));

    const formattedDataForPM = incorrectData.map((item) => ({
      carrier_reference_number: item.liveChargeGroup.reference_number,
      carrier_totalAmount: item.liveChargeGroup.totalAmount,
      broker_reference_number: item.shiposVendorChargeSet.reference_number,
      broker_totalAmount: item.shiposVendorChargeSet.totalAmount,
    }));

    // Create a new workbook and worksheet
    const ws = xlsx.utils.json_to_sheet(formattedData);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Incorrect Data");

    // Write the workbook to a file
    xlsx.writeFile(wb, "incorrect_data1.xlsx");


    const ws1 = xlsx.utils.json_to_sheet(formattedDataForPM);
    const wb1 = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb1, ws1, "Incorrect Data for pm");

    // Write the workbook to a file
    xlsx.writeFile(wb1, "incorrect_data_forpm1.xlsx");
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Call the function to get documents
getDocuments();
