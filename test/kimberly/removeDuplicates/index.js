db.loads.bulkWrite([
  // KPRO_C186
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C186",
        reference_number: "KPRO_R73149",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: { $in: [ObjectId("64b58518f6e1e116277d22fa")] },
          },
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C186",
        reference_number: "KPRO_R73208",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: { $in: [ObjectId("64b58517f6e1e116277d22f8")] },
          },
        },
      },
    },
  },

  //   KPRO_C162
  {
    updateOne: {
      filter: {
        reference_number: "KPRO_E72567",
        carrier: ObjectId("63f93765625de015c40bf697"),
        invoiceNumber: "KPRO_C162",
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: { $nin: [ObjectId("64adbed575053516f09e21d6")] },
          },
        },
        $set: {
          paidAmount: 699.66,
          remainAmount: 0,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        reference_number: "KPRO_E72633",
        carrier: ObjectId("63f93765625de015c40bf697"),
        invoiceNumber: "KPRO_C162",
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: { $nin: [ObjectId("64adbeae780d0415cf2c6ee5")] },
          },
        },
        $set: {
          paidAmount: 267.37,
          remainAmount: 0,
        },
      },
    },
  },

  //   KPRO_C160
  {
    updateOne: {
      filter: {
        reference_number: "KPRO_E72247",
        carrier: ObjectId("63f93765625de015c40bf697"),
        invoiceNumber: "KPRO_C160",
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: { $nin: [ObjectId("64adbed475053516f09e21d1")] },
          },
        },
        $set: {
          paidAmount: 485.81,
          remainAmount: 0,
        },
      },
    },
  },

  // KPRO_C51 (amount over due here.)
  // KPRO_C175
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C175",
        reference_number: "KPRO_M72657",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $set: {
          totalAmount: 565.79,
          remainAmount: 0,
          paidAmount: 565.79,
          "paymentHistory.4.amount": 567.79,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C175",
        reference_number: "KPRO_M72657",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64adbed775053516f09e21f3")],
            },
          },
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C175",
        reference_number: "KPRO_M72737",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: { $nin: [ObjectId("64adbed5ec17f2170d106065")] },
          },
        },
        $set: {
          paidAmount: 419.28,
          remainAmount: 0,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C175",
        reference_number: "KPRO_M72738",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: { $nin: [ObjectId("64adbed775053516f09e21f1")] },
          },
        },
        $set: {
          paidAmount: 480.04,
          remainAmount: 0,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C175",
        reference_number: "KPRO_M72739",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: { $nin: [ObjectId("64adbeb1780d0415cf2c6f01")] },
          },
        },
        $set: {
          paidAmount: 404.09,
          remainAmount: 0,
        },
      },
    },
  },

  // KPRO_C167
  // update the amount of the payment history
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C167",
        reference_number: "KPRO_M72358",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $set: {
          totalAmount: 1074.84,
          remainAmount: 0,
          paidAmount: 1074.84,
          "paymentHistory.4.amount": 1074.84,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C167",
        reference_number: "KPRO_M72358",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64adbed875053516f09e220e")],
            },
          },
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C167",
        reference_number: "KPRO_M72396",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64adbac9afb038166be68734")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 388.9,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C167",
        reference_number: "KPRO_M72397",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64adbeb2780d0415cf2c6f1d")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 473.09,
        },
      },
    },
  },

  // KPRO_C9
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C9",
        reference_number: "KPRO_R71998",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("647e26de2f35e014c4113995")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 517.56,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C9",
        reference_number: "KPRO_R72000",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("647e26dca37f7115f9438754")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 517.29,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C9",
        reference_number: "KPRO_R72001",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("647e26de2f35e014c4113993")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 526.27,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C9",
        reference_number: "KPRO_R72001",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("647e26de2f35e014c4113993")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 526.27,
        },
      },
    },
  },

  // KPRO_C60  amount not matching between pp and qbd

  // KPRO_C307
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73605",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae89a0f06515b337d6de")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 770.14,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73606",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae40066cbe1629d576b0")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 612.68,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73607",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae40066cbe1629d576af")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 657.51,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73608",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae88a0f06515b337d6db")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 164.38,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73661",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae40066cbe1629d576ad")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 786.19,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73662",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae88a0f06515b337d6d9")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 523.02,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73663",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae40066cbe1629d576ab")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 358.64,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73664",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae3f066cbe1629d576aa")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 687.4,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73665",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae88a0f06515b337d6d6")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 403.47,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73691",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae88a0f06515b337d6d5")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 513.43,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73692",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae3f066cbe1629d576a7")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 956.38,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73693",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae88a0f06515b337d6d3")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 881.67,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73694",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae88a0f06515b337d6d2")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 627.63,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73694",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae88a0f06515b337d6d2")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 627.63,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73695",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae3f066cbe1629d576a4")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 119.55,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73696",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae3f066cbe1629d576a3")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 298.87,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73730",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae87a0f06515b337d6cf")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 537.97,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73731",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae87a0f06515b337d6ce")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 732.23,
        },
      },
    },
  },
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73732",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae87a0f06515b337d6cd")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 343.7,
        },
      },
    },
  },

  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C307",
        reference_number: "KPRO_R73751",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $pull: {
          paymentHistory: {
            _id: {
              $nin: [ObjectId("64d2ae87a0f06515b337d6cb")],
            },
          },
        },
        $set: {
          remainAmount: 0,
          paidAmount: 567.85,
        },
      },
    },
  },

  // KPRO_C53 amount does not maatch between pp and qbd.
  // KPRO_C80 fix amount remaining amount
  {
    updateOne: {
      filter: {
        invoiceNumber: "KPRO_C80",
        reference_number: "KPRO_R72444",
        carrier: ObjectId("63f93765625de015c40bf697"),
      },
      update: {
        $set: {
          remainAmount: 0,
          paidAmount: 393.43,
          totalAmount: 393.43,
          "paymentHistory.0.amount": 393.43,
        },
      },
    },
  },
]);
