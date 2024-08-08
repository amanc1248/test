const { MongoClient, ObjectId } = require('mongodb');

// Connection URLs for both databases
const liveDbUrl = "mongodb://read:ZC1Ag9NbgGSsB4x6@cluster0-shard-00-00-o6q7l.mongodb.net:27017,cluster0-shard-00-01-o6q7l.mongodb.net:27017,cluster0-shard-00-02-o6q7l.mongodb.net:27017/live?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
const shiposDbUrl = "mongodb://read:ZC1Ag9NbgGSsB4x6@cluster0-shard-00-00-o6q7l.mongodb.net:27017,cluster0-shard-00-01-o6q7l.mongodb.net:27017,cluster0-shard-00-02-o6q7l.mongodb.net:27017/shipos?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

async function fetchDataAndCompareStatuses() {
    const liveClient = new MongoClient(liveDbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    const shiposClient = new MongoClient(shiposDbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await liveClient.connect();
        await shiposClient.connect();
        console.log("Connected to both databases");

        const liveDb = liveClient.db();
        const shiposDb = shiposClient.db();

        // Step 1: Fetch Data from 'live' Database
        const loads = await liveDb.collection('loads').find({
            tenderReferenceNumber: { $exists: true },
            createdAt: { $gt: new Date("2024-06-01T00:00:00Z") },
            carrier: new ObjectId('623a1a0ae85bec6eacd5096d')
        }, {
            projection: { _id: 1, tenderReferenceNumber: 1, reference_number: 1, createdAt: 1 }
        }).toArray();

        if (loads.length === 0) {
            console.log("No loads found with the specified criteria.");
            return;
        }

        const loadIds = loads.map(load => load._id);
        const tenderReferenceNumbers = loads.map(load => load.tenderReferenceNumber);

        const chargegroups = await liveDb.collection('chargegroups').find({
            loadId: { $in: loadIds },
            isDefault: true
        }, {
            projection: { loadId: 1, customerApprovalStatus: 1, load_reference_number: 1, updatedAt: 1 }
        }).toArray();

        // Step 2: Fetch Data from 'shipos' Database
        const brokertenders = await shiposDb.collection('brokertenders').find({
            drayOSTenderRefNo: { $in: tenderReferenceNumbers }
        }, {
            projection: { drayOSTenderRefNo: 1, shipLoadId: 1 }
        }).toArray();

        if (brokertenders.length === 0) {
            console.log("No broker tenders found with the specified criteria.");
            return;
        }

        const tenderToShipLoadMap = new Map();
        brokertenders.forEach(bt => {
            tenderToShipLoadMap.set(bt.drayOSTenderRefNo, bt.shipLoadId);
        });

        const shipLoadIds = brokertenders.map(tender => tender.shipLoadId);

        const vendorchargesets = await shiposDb.collection('vendorchargesets').find({
            loadId: { $in: shipLoadIds }
        }, {
            projection: { loadId: 1, status: 1, load_reference_number: 1, updatedAt: 1 }
        }).toArray();

        // Step 3: Compare Data and Find Mismatches
        const combinedSets = vendorchargesets.map(vc => {
            const foundTender = brokertenders.find(bT => bT.shipLoadId + "" === vc.loadId + "");
            let foundInLive;
            let foundInChargeGroup;
            if (foundTender) {
                foundInLive = loads.find(cg => cg.tenderReferenceNumber === foundTender.drayOSTenderRefNo);
                if (foundInLive) {
                    foundInChargeGroup = chargegroups.find(cg => cg?.loadId + "" === foundInLive?._id + "");
                }
            }
            return {
                carrier: foundInChargeGroup,
                broker: vc,
                date: new Date(vc.updatedAt) // or use `foundInChargeGroup.updatedAt`
            };
        });

        let mismatch = [];
        for (const check of combinedSets) {
            const carrierStatus = check.carrier?.customerApprovalStatus;
            const shiposStatus = check.broker.status;
            if (carrierStatus !== shiposStatus && shiposStatus && carrierStatus) {
                mismatch.push(check);
            }
        }

        // Sort mismatched data by the most recent date
        mismatch.sort((a, b) => b.date - a.date);

        console.log(mismatch);
        // Output mismatched data
        console.log(JSON.stringify(mismatch, null, 2));
    } catch (error) {
        console.error("Error connecting to the database or fetching data:", error);
    } finally {
        await liveClient.close();
        await shiposClient.close();
    }
}



fetchDataAndCompareStatuses();
