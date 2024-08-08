const { MongoClient, ObjectId } = require("mongodb");

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

    // Define the criteria for the loads collection
    const loadCriteria = {
      tenderReferenceNumber: { $exists: true },
      createdAt: {
        $gte: new Date("2024-01-01T00:00:00Z"),
        $lte: new Date("2024-06-14T23:59:59Z"),
      },
      isDeleted: false,
      carrier: new ObjectId("623a1a0ae85bec6eacd5096d"),
    };

    // Get all documents from the loads collection that meet the criteria
    const liveData = await liveDb
      .collection("loads")
      .aggregate([
        { $match: loadCriteria },
        {
          $lookup: {
            from: "chargegroups",
            let: { loadId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$loadId", "$$loadId"] },
                      { $in: ["$status", ["INVOICED", "PAID"]] },
                      {
                        $eq: [
                          "$carrier",
                          new ObjectId("623a1a0ae85bec6eacd5096d"),
                        ],
                      },
                      { $eq: ["$isDeleted", false] },
                      {
                        $gte: ["$createdAt", new Date("2024-01-01T00:00:00Z")],
                      },
                      {
                        $lte: ["$createdAt", new Date("2024-06-14T23:59:59Z")],
                      },
                    ],
                  },
                },
              },
            ],
            as: "chargegroups",
          },
        },
        {
          $project: {
            _id: 1,
            tenderReferenceNumber: 1,
            createdAt: 1,
            carrier: 1,
            rereference_number: 1,
            chargegroups: 1,
            chargegroupCount: { $size: "$chargegroups" },
          },
        },
        { $match: { chargegroupCount: { $gt: 1 } } },
      ])
      .toArray();
    console.log(liveData);

    const liveDataMap = new Map(
        liveData.map(load => [load.tenderReferenceNumber, load])
      );
    // Connect to the 'shipos' database
    const shiposDb = client.db("shipos");

    // Get the related data from the brokertenders collection in shipos
    const brokertendersData = await shiposDb
      .collection("brokertenders")
      .aggregate([
        {
          $match: {
            drayOSTenderRefNo: {
              $in: liveData.map((load) => load.tenderReferenceNumber),
            },
          },
        },
        {
          $project: {
            _id: 1,
            drayOSTenderRefNo: 1,
            shipLoadId: 1,
          },
        },
      ])
      .toArray();

    // Create a map for brokertenders keyed by shipLoadId
    const brokertendersMap = new Map(
      brokertendersData.map((bt) => [
        bt.shipLoadId.toString(),
        bt.drayOSTenderRefNo,
      ])
    );

    // Extract the shipLoadIds
    const shipLoadIds = brokertendersData.map((bt) => bt.shipLoadId);

    // Get the related vendorchargesets documents
    const vendorchargesetsData = await shiposDb
      .collection("vendorchargesets")
      .find({
        loadId: { $in: shipLoadIds },
        isDefault: true,
        // status: { $in: ["INVOICED", "PAID"] },
      })
      .toArray();

    // Group vendorchargesets by tenderReferenceNumber and include liveData
    const groupedData = vendorchargesetsData.reduce((acc, vcs) => {
      const tenderRef = brokertendersMap.get(vcs.loadId.toString());
      if (!acc[tenderRef]) {
        acc[tenderRef] = {
          liveData: liveDataMap.get(tenderRef),
          vendorchargesets: [],
        };
      }
      acc[tenderRef].vendorchargesets.push(vcs);
      return acc;
    }, {});

    console.log(groupedData);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Call the function to get documents
getDocuments();
