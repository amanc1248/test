const { oldPricing, newPricing, CHARGES_TYPES } = require("./data2");
const removeManuallyChangesCharges = (oldPricing, newPricing) => {
  const chargesWithoutManuallyChanges = [];
  for (const charge of oldPricing) {
    const manuallyChangedFound = newPricing.pricing.find(
      (obj) =>
        obj?.name === charge?.name &&
        obj?.dynamicPricingId === charge?.dynamicPricingId &&
        obj?.customerChargeProfileId === charge?.customerChargeProfileId &&
        charge?.chargeType === CHARGES_TYPES.MANUALLY_CHANGED
    );
    if (!manuallyChangedFound) chargesWithoutManuallyChanges.push(charge);
  }
  return chargesWithoutManuallyChanges;
};
const finalCharges = removeManuallyChangesCharges(oldPricing, newPricing);
console.log(finalCharges);
