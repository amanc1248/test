const {loadParameters, rule} = require("./data");

const loadsParamsMapper = ()=>{
    let mappedLoadParams = {};

    // calller
    if(loadParameters?.caller?._id){
        mappedLoadParams.caller = loadParameters?.caller?._id;
    }else{
        mappedLoadParams.caller = loadParameters?.caller;
    }

    // shipper
    if(loadParameters?.shipper.length){
        mappedLoadParams.shipper = loadParameters?.shipper.map(shipper=>shipper._id)
    }else{
        mappedLoadParams.shipper = loadParameters?.shipper
    }

    // consignee
    if(loadParameters?.consignee.length){
        mappedLoadParams.consignee = loadParameters?.consignee.map(consignee=>consignee._id)
    }else{
        mappedLoadParams.consignee = loadParameters?.consignee
    }

    // chassis pick 
    if(loadParameters?.chassisPick?.length){
        mappedLoadParams.chassisPick = loadParameters?.chassisPick?.map(chassisPick=>chassisPick._id)
    }else{
        mappedLoadParams.chassisPick = loadParameters?.chassisPick
    }

    // emptyOrigin TODO

    // chassis termination
    if(loadParameters?.chassisTermination?.length){
        mappedLoadParams.chassisTermination = loadParameters?.chassisTermination.map(chassisTermination=>chassisTermination._id)
    }else{
        mappedLoadParams.chassisTermination = loadParameters?.chassisTermination
    }
    
    // container type
    if(loadParameters?.containerType?._id){
        mappedLoadParams.containerType = loadParameters?.containerType?._id;
    }else{
        mappedLoadParams.containerType = loadParameters?.containerType;
    }

    // container size
    if(loadParameters?.containerSize?._id){
        mappedLoadParams.containerSize = loadParameters?.containerSize?._id;
    }else{
        mappedLoadParams.containerSize = loadParameters?.containerSize;
    }

    // chassisOwner
    if(loadParameters?.chassisOwner?._id){
        mappedLoadParams.chassisOwner = loadParameters?.chassisOwner?._id;
    }else{
        mappedLoadParams.chassisOwner = loadParameters?.chassisOwner;
    }

    // terminal
    if(loadParameters?.terminal?._id){
        mappedLoadParams.terminal = loadParameters?.terminal?._id;
    }else{
        mappedLoadParams.terminal = loadParameters?.terminal;
    }
    
    // total weight
    // hazmat
    // hot
    // temperature
    // liquor
    // cityState

    // state
    if(loadParameters?.state?.country){
        mappedLoadParams.state = loadParameters?.state?.country;
    }

    // deliveryDay
    // deliveryTime
    // overWeight
    // dropLocation
    // dropped
    // deliveryCountry
    return mappedLoadParams
}

const mappedLoadParams = loadsParamsMapper();
  const updateMappedLoadParams = ()=> {
    const updatedObj = { ...loadParameters }; // Create a copy to avoid modifying the original object directly
    for (const key in mappedLoadParams) {
        if (mappedLoadParams.hasOwnProperty(key)) {
            if (updatedObj.hasOwnProperty(key)) {
                updatedObj[key] = mappedLoadParams[key];
            }
        }
    }
    return updatedObj;
  }
  updateMappedLoadParams();