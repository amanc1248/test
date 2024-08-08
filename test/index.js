// const customers = [
//   {
//     name: "America ",
//     profileType: "customer/group",
//     profile: null,
//     profileGroup: [
//       {
//         name: "APM",
//         _id: "1111",
//       },
//       {
//         name: "Company ,DKK",
//         _id: 2,
//       },
//       {
//         name: "Port",
//         _id: 3,
//       },
//       {
//         name: "CSNJ",
//         _id: 4,
//       },
//     ],
//     _id: "1111",
//   },
// ];
const customers = [
    {
      name: "America ",
      profileType: "customer",
      profile: {
        name: "APM",
        _id: "1111",
      },
      profileGroup:null,
      _id: "1111",
    },
    {
      name: "America ",
      profileType: "customer",
      profile: {
        name: "APM",
        _id: "1111",
      },
      profileGroup:null,
      _id: "1111",
    },{
      name: "America ",
      profileType: "customer",
      profile: {
        name: "APM",
        _id: "1111",
      },
      profileGroup:null,
      _id: "1111",
    },{
      name: "America ",
      profileType: "customer",
      profile: {
        name: "APM",
        _id: "1111",
      },
      profileGroup:null,
      _id: "1111",
    },{
      name: "America ",
      profileType: "customer",
      profile: {
        name: "asdfasdfasdfasfasdf",
        _id: "2",
      },
      profileGroup:null,
      _id: "1111",
    },
  ];
const loadParameters = {
  caller: {
    _id: "2",
  },
};
// const foundCustomers = customers.find((obj) => {
//     let foundCustomer;

//     // when it is customer/group
//   if (obj.profileType === "customer/group") {
//     foundCustomer =  obj.profileGroup.find(
//       (profileGroup) =>
//         profileGroup?._id + "" ===
//         (loadParameters?.caller?._id ?? loadParameters?.caller)
//     );
//     // return innerProfileGroup;
//   }

// //   when it is simple customer
//   if (obj.profileType === "customer") {
//     const matchId =  (
//       obj?.profile?._id + "" ===
//       (loadParameters?.caller?._id ?? loadParameters?.caller)
//     );
//     if(matchId)foundCustomer = obj
//   }
//   return foundCustomer;
// });

const findCustomer = ()=>{
  let foundCustomer;
  for (const customer of customers) {
    if(customer?.profileType === "customer/group"){
      foundCustomer = customer.profileGroup.find(obj => obj?._id === loadParameters?.caller?._id);
      if(foundCustomer) break;
    }
    if(customer?.profileType === "customer"){
      if(customer?.profile?._id ===  loadParameters?.caller?._id){
        foundCustomer = customer;
      }
      if(foundCustomer) break;
    }
  }
  return foundCustomer;
}
findCustomer()
// console.log("asdfklaskdf: ", foundCustomers);
