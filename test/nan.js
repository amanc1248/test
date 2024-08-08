const isChargeTotalAmountZero = (charge) => {
    try {
      // Prior Check
      // 1. If charge exists
      if (!charge) return { message: "charge required" };
  
      const hi = charge?.unitCount ?? 0;
      const xz = charge?.freeUnits ?? 0;
      console.log(hi, "ksdfk", xz, "aksdf", (hi - xz) * charge?.finalAmount);
      // Step 1: Caculate the total Amount of the charge
      const totalChargeAmount =
        ((charge?.unitCount ?? 0 )- (charge?.freeUnits ?? 0)) * (charge?.finalAmount ??
        0);
    // const totalChargeAmount =
    // ( 0 -  0) * 0;
      console.log("asadfasdfasdf", totalChargeAmount);
      if (!totalChargeAmount) return true;
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  
  const result = isChargeTotalAmountZero({
    finalAmount: 0
  });
  console.log(result);
  console.log("here", (0 - 0) * 0);
  