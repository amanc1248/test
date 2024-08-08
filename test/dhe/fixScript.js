const { loads } = require("./loads");
const fs = require('fs');
// const script = [
//   {
//     updateOne: {
//       filter:{
//         reference_number:"17D3R_M100015",
//         carrier: ObjectId("650956dc3f7fe444172f2e8d"),
//       },
//       update:{
//         $set:{
//             "items.0.weight":123
//         }
//       }
//     },
//   },
// ];

const queryArray = []
for (const load of loads) {
    const items = load?.items;
    const updateObj = {}
    for (const item of items) {
        const left = `items.${item?.itemIndex}.weight`;
        const right = parseFloat((item?.weightKgs * 2.20462).toFixed(2));
        updateObj[left] = right;
    }
    if(Object.entries(updateObj).length){
        queryArray.push({
            updateOne:{
                filter: {
                    reference_number: load?._id,
                    carrier: "60747b8448cb687a0f377e82"
                },
                update: {
                    $set: updateObj
                }
            }
        })
    }
}
fs. writeFileSync('output.json', JSON.stringify(queryArray));