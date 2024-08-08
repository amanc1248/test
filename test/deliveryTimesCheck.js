const moment = require("moment");
const buildDeliveryDayAndTime = (deliveryTimes)  => {
  if(!deliveryTimes[0]?.deliveryFromTime) return null;
  let deliveryDay = "";
  let deliveryTime;
  deliveryDay = moment(deliveryTimes[0].deliveryFromTime).utc()
    .format("dddd");
  deliveryTime = parseFloat(moment(deliveryTimes[0].deliveryFromTime).utc()
  .format("HH"));
  return { deliveryDay, deliveryTime };
};
const deliveryTimes = [
  {
    "customerId": "6417097564396315ed4cf707",
    "_id": "64f55e4416f602226681571e"
  }
]
console.log(buildDeliveryDayAndTime(deliveryTimes))