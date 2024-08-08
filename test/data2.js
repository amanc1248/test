const oldPricing = [
  {
    _id: 999999,
    name: "Detention",
    perType: "perday",
    chargePerDay: 0,
    amount: 0,
    freeDays: 0,
    unit: "0.00",
    finalAmount: 4,
    chargeType: "MANUALLY_CHANGED",
    dynamicPricingId: "64e2eef7f51a295806310ac7",
    customerChargeProfileId: "64e5b4e87eed3f25ffd3ac49",
    percentageOf: [],
  },
];

const newPricing = {
  billTo: "63299fbb4883562a8c93b1d6",
  pricing: [
    {
      name: "Detention",
      description: undefined,
      unitDuration: undefined,
      perType: "perday",
      chargePerDay: 0,
      amount: "0.00",
      freeDays: 0,
      unit: "0.00",
      finalAmount: "9934.00",
      chargeType: "CUSTOMER_RATE_RECORD",
      dynamicPricingId: "64e2eef7f51a295806310ac7",
      minimumAmount: 9934,
      customerChargeProfileId: "64e5b4e87eed3f25ffd3ac49",
    },
  ],
};
const CHARGES_TYPES = {
    CUSTOMER_RATES: 'CUSTOMER_RATES',
    DYNAMIC_PRICING: 'DYNAMIC_PRICING',
    RADIUS_RATES: "RADIUS_RATES",
    SYSTEM_GENERATED: 'SYSTEM_GENERATED',
    MANUALLY_CHANGED: 'MANUALLY_CHANGED',
    CUSTOMER_RATE_RECORD: 'CUSTOMER_RATE_RECORD',
}
module.exports = {
  newPricing,
  oldPricing,
  CHARGES_TYPES,
};
