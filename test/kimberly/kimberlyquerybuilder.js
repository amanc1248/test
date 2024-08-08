const fs = require("fs");

const finalList = [
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "64cd589ac33928158987243d",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 567.85,
            paidAmount: 567.85,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:20.064Z",
              },
              _id: {
                $oid: "650db99cd9702a15cf6fbe24",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 567.85,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74703",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d40276b3d7a515d61be4d7",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 418.42,
            paidAmount: 418.42,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:19.286Z",
              },
              _id: {
                $oid: "650db99bd9702a15cf6fbe1b",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 418.42,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74793",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64cd589a50816e15ec3e586d",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 508.08,
            paidAmount: 508.08,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:19.907Z",
              },
              _id: {
                $oid: "650db99bd9702a15cf6fbe22",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 508.08,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74705",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64da973b41742b162de082fe",
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 224.15,
            paidAmount: 224.15,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:18.411Z",
              },
              _id: {
                $oid: "650db99ad9702a15cf6fbe12",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 224.15,
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_B74918",
            invoiceNumber: "KPRO_C419",
          },
          {
            _id: {
              $oid: "64d4027644e80815ba971172",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 792.01,
            paidAmount: 792.01,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:19.412Z",
              },
              _id: {
                $oid: "650db99bd9702a15cf6fbe1c",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 792.01,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74792",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d402769b9a2d15c2962cdb",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 627.63,
            paidAmount: 627.63,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:19.581Z",
              },
              _id: {
                $oid: "650db99bd9702a15cf6fbe1e",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 627.63,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74790",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d55b725206df15fc0839b1",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 358.64,
            paidAmount: 358.64,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:18.789Z",
              },
              _id: {
                $oid: "650db99ad9702a15cf6fbe16",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 358.64,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74855",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64cd587750816e15ec3e5852",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 433.2,
            paidAmount: 433.2,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:20.145Z",
              },
              _id: {
                $oid: "650db99cd9702a15cf6fbe25",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 433.2,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74702",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d55b720194e215c3ff7b50",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 567.85,
            paidAmount: 567.85,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:18.889Z",
              },
              _id: {
                $oid: "650db99ad9702a15cf6fbe17",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 567.85,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74854",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d679cac8557f56d7330395",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 328.76,
            paidAmount: 328.76,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:18.506Z",
              },
              _id: {
                $oid: "650db99ad9702a15cf6fbe13",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 328.76,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74879",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d55b73ea2c6d158dc8e7ba",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 463.25,
            paidAmount: 463.25,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:18.705Z",
              },
              _id: {
                $oid: "650db99ad9702a15cf6fbe15",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 463.25,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74856",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d4025caf952215d8f19740",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 449.25,
            paidAmount: 449.25,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:19.662Z",
              },
              _id: {
                $oid: "650db99bd9702a15cf6fbe1f",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 449.25,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74789",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d402771c0aed1617d655c3",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 418.42,
            paidAmount: 418.42,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:19.195Z",
              },
              _id: {
                $oid: "650db99bd9702a15cf6fbe1a",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 418.42,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74794",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64cd589b3e4fcb0f3dc3d9d2",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 433.36,
            paidAmount: 433.36,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:19.824Z",
              },
              _id: {
                $oid: "650db99bd9702a15cf6fbe21",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 433.36,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74706",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d55b5146fcda16177e155d",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 898.5,
            paidAmount: 898.5,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:19.067Z",
              },
              _id: {
                $oid: "650db99bd9702a15cf6fbe19",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 898.5,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74852",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d55b73433d9015ebe7cac3",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 597.74,
            paidAmount: 597.74,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:18.619Z",
              },
              _id: {
                $oid: "650db99ad9702a15cf6fbe14",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 597.74,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74857",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d402769b525816207eb319",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 418.42,
            paidAmount: 418.42,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:19.495Z",
              },
              _id: {
                $oid: "650db99bd9702a15cf6fbe1d",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 418.42,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74791",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64cd589bc85b8f15e6cdb3fb",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 209.21,
            paidAmount: 209.21,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:19.742Z",
              },
              _id: {
                $oid: "650db99bd9702a15cf6fbe20",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 209.21,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74707",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64cd589a4c10fa0f05cc5369",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 478.19,
            paidAmount: 478.19,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:19.986Z",
              },
              _id: {
                $oid: "650db99bd9702a15cf6fbe23",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 478.19,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74704",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d55b72604a8a15e9dffee9",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 508.08,
            paidAmount: 508.08,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:18.986Z",
              },
              _id: {
                $oid: "650db99ad9702a15cf6fbe18",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 508.08,
            },
            billingDate: {
              $date: "2023-08-15T22:05:50.000Z",
            },
            qbInvoiceId: "2BF485-1692137210",
            reference_number: "KPRO_R74853",
            invoiceNumber: "KPRO_C419",
            consigneeName: "CLARKE FINISH",
          },
        ],
        qbInvoicesId: [
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
          "2BF485-1692137210",
        ],
        referenceNums: [
          "KPRO_R74703",
          "KPRO_R74793",
          "KPRO_R74705",
          "KPRO_B74918",
          "KPRO_R74792",
          "KPRO_R74790",
          "KPRO_R74855",
          "KPRO_R74702",
          "KPRO_R74854",
          "KPRO_R74879",
          "KPRO_R74856",
          "KPRO_R74789",
          "KPRO_R74794",
          "KPRO_R74706",
          "KPRO_R74852",
          "KPRO_R74857",
          "KPRO_R74791",
          "KPRO_R74707",
          "KPRO_R74704",
          "KPRO_R74853",
        ],
        amountSum: 9701.009999999998,
        sameQbInvoiceId: "2BF485-1692137210",
        invoiceNumber: "KPRO_C419",
      },
      neededPaymentId: "2CA5CC-1695398358",
    },
    {},
    {},
    {},
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "6430aa00cb814215ebac5e85",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 419.28,
            paidAmount: 419.28,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.924Z",
              },
              amount: 419.28,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d6806a6",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:48:43.000Z",
            },
            qbInvoiceId: "2B982F-1685716763",
            reference_number: "KPRO_M71632",
            invoiceNumber: "KPRO_C72",
            consigneeName: "SAPUTO DAIRY PRODUCTS",
          },
          {
            _id: {
              $oid: "642d7db6ab1b5715fbde569b",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 434.47,
            paidAmount: 434.47,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.962Z",
              },
              amount: 434.47,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d6806a7",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:48:43.000Z",
            },
            qbInvoiceId: "2B982F-1685716763",
            reference_number: "KPRO_M71556",
            invoiceNumber: "KPRO_C72",
            consigneeName: "VERSACOLD SURREY",
          },
          {
            _id: {
              $oid: "6430aa525bdefc15ff9f1b4f",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 480.04,
            paidAmount: 480.04,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.875Z",
              },
              amount: 480.04,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d6806a5",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:48:43.000Z",
            },
            qbInvoiceId: "2B982F-1685716763",
            reference_number: "KPRO_M71633",
            invoiceNumber: "KPRO_C72",
            consigneeName: "SAPUTO DAIRY PRODUCTS",
          },
          {
            _id: {
              $oid: "6430aae899253515d05fa6f1",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 540.8,
            paidAmount: 540.8,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.837Z",
              },
              amount: 540.8,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d6806a4",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:48:43.000Z",
            },
            qbInvoiceId: "2B982F-1685716763",
            reference_number: "KPRO_M71634",
            invoiceNumber: "KPRO_C72",
            consigneeName: "WALLACE & CAREY LTD",
          },
        ],
        qbInvoicesId: [
          "2B982F-1685716763",
          "2B982F-1685716763",
          "2B982F-1685716763",
          "2B982F-1685716763",
        ],
        referenceNums: [
          "KPRO_M71632",
          "KPRO_M71556",
          "KPRO_M71633",
          "KPRO_M71634",
        ],
        amountSum: 1874.59,
        sameQbInvoiceId: "2B982F-1685716763",
        invoiceNumber: "KPRO_C72",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "6490cbe1c6c429167a82bc85",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 221.8,
            paidAmount: 221.8,
            paymentHistory: {
              createdAt: {
                $date: "2023-08-03T14:39:51.883Z",
              },
              amount: 221.8,
              paymentDate: {
                $date: "2023-08-03T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "48120",
              _id: {
                $oid: "64cbbc37ba4fa316069647ec",
              },
            },
            billingDate: {
              $date: "2023-06-23T00:00:56.000Z",
            },
            qbInvoiceId: "2BB26F-1687478467",
            reference_number: "KPRO_M73658",
            invoiceNumber: "KPRO_C287",
            consigneeName: "CLARKE A TRANSPORT SURREY",
          },
        ],
        qbInvoicesId: ["2BB26F-1687478467"],
        referenceNums: ["KPRO_M73658"],
        amountSum: 221.8,
        sameQbInvoiceId: "2BB26F-1687478467",
        invoiceNumber: "KPRO_C287",
      },
      neededPaymentId: "2C32F3-1694603090",
    },
    {},
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "64482340412d2a1623dbbf6e",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 455.5,
            paidAmount: 455.5,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.260Z",
              },
              amount: 455.5,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d680697",
              },
            },
            billingDate: {
              $date: "2023-05-08T22:04:59.000Z",
            },
            qbInvoiceId: "2B9AAB-1685717356",
            reference_number: "KPRO_E72075",
            invoiceNumber: "KPRO_C77",
            consigneeName: "ABBYWRAP PACKAGING LTD.",
          },
          {
            _id: {
              $oid: "6446c4c411d44a15f4ede0f0",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 404.09,
            paidAmount: 404.09,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.308Z",
              },
              amount: 404.09,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d680698",
              },
            },
            billingDate: {
              $date: "2023-05-08T22:04:59.000Z",
            },
            qbInvoiceId: "2B9AAB-1685717356",
            reference_number: "KPRO_E72002",
            invoiceNumber: "KPRO_C77",
            consigneeName: "ISAAC FREIGHT",
          },
          {
            _id: {
              $oid: "644930770a1aad162d8b5710",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 136.71,
            paidAmount: 136.71,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.225Z",
              },
              amount: 136.71,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d680696",
              },
            },
            billingDate: {
              $date: "2023-05-08T22:04:59.000Z",
            },
            qbInvoiceId: "2B9AAB-1685717356",
            reference_number: "KPRO_E72086",
            invoiceNumber: "KPRO_C77",
            consigneeName: "DIVERSITREE * DEAD RUN",
          },
        ],
        qbInvoicesId: [
          "2B9AAB-1685717356",
          "2B9AAB-1685717356",
          "2B9AAB-1685717356",
        ],
        referenceNums: ["KPRO_E72075", "KPRO_E72002", "KPRO_E72086"],
        amountSum: 996.3,
        sameQbInvoiceId: "2B9AAB-1685717356",
        invoiceNumber: "KPRO_C77",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "64d2c80a168fc915ed4c41d6",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 283.93,
            paidAmount: 283.93,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:20.402Z",
              },
              _id: {
                $oid: "650db99cd9702a15cf6fbe28",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 283.93,
            },
            billingDate: {
              $date: "2023-08-15T21:36:04.000Z",
            },
            qbInvoiceId: "2BF477-1692135531",
            reference_number: "KPRO_R74731",
            invoiceNumber: "KPRO_C418",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d2c80c7dd67b15cfc25be7",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 283.93,
            paidAmount: 283.93,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:20.237Z",
              },
              _id: {
                $oid: "650db99cd9702a15cf6fbe26",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 283.93,
            },
            billingDate: {
              $date: "2023-08-15T21:36:04.000Z",
            },
            qbInvoiceId: "2BF477-1692135531",
            reference_number: "KPRO_R74733",
            invoiceNumber: "KPRO_C418",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d2c809e447ed15d809d10c",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 567.85,
            paidAmount: 567.85,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:20.464Z",
              },
              _id: {
                $oid: "650db99cd9702a15cf6fbe29",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 567.85,
            },
            billingDate: {
              $date: "2023-08-15T21:36:04.000Z",
            },
            qbInvoiceId: "2BF477-1692135531",
            reference_number: "KPRO_R74730",
            invoiceNumber: "KPRO_C418",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d2c7eccd3e881605d03072",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 914.54,
            paidAmount: 914.54,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:20.582Z",
              },
              _id: {
                $oid: "650db99cd9702a15cf6fbe2b",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 914.54,
            },
            billingDate: {
              $date: "2023-08-15T21:36:04.000Z",
            },
            qbInvoiceId: "2BF477-1692135531",
            reference_number: "KPRO_R74728",
            invoiceNumber: "KPRO_C418",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d2c80cdff396161e0cbbbc",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 732.23,
            paidAmount: 732.23,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:20.326Z",
              },
              _id: {
                $oid: "650db99cd9702a15cf6fbe27",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 732.23,
            },
            billingDate: {
              $date: "2023-08-15T21:36:04.000Z",
            },
            qbInvoiceId: "2BF477-1692135531",
            reference_number: "KPRO_R74732",
            invoiceNumber: "KPRO_C418",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64d2c80913e6d31626056656",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 1031.1,
            paidAmount: 1031.1,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:20.527Z",
              },
              _id: {
                $oid: "650db99cd9702a15cf6fbe2a",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 1031.1,
            },
            billingDate: {
              $date: "2023-08-15T21:36:04.000Z",
            },
            qbInvoiceId: "2BF477-1692135531",
            reference_number: "KPRO_R74729",
            invoiceNumber: "KPRO_C418",
            consigneeName: "CLARKE FINISH",
          },
        ],
        qbInvoicesId: [
          "2BF477-1692135531",
          "2BF477-1692135531",
          "2BF477-1692135531",
          "2BF477-1692135531",
          "2BF477-1692135531",
          "2BF477-1692135531",
        ],
        referenceNums: [
          "KPRO_R74731",
          "KPRO_R74733",
          "KPRO_R74730",
          "KPRO_R74728",
          "KPRO_R74732",
          "KPRO_R74729",
        ],
        amountSum: 3813.58,
        sameQbInvoiceId: "2BF477-1692135531",
        invoiceNumber: "KPRO_C418",
      },
      neededPaymentId: "2CA5CC-1695398358",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "643ee2996d5c1415dbf0373e",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 510.42,
            paidAmount: 510.42,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:52.474Z",
              },
              amount: 510.42,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0c44d1c3163d680671",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:43:21.000Z",
            },
            qbInvoiceId: "2B6DEB-1683240609",
            reference_number: "KPRO_M71847",
            invoiceNumber: "KPRO_C56",
            consigneeName: "KLONDIKE COLD STORAGE SURREY",
          },
          {
            _id: {
              $oid: "643d68ee010afb163035e06a",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 510.42,
            paidAmount: 510.42,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:52.540Z",
              },
              amount: 510.42,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0c44d1c3163d680672",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:43:21.000Z",
            },
            qbInvoiceId: "2B6DEB-1683240609",
            reference_number: "KPRO_M71825",
            invoiceNumber: "KPRO_C56",
            consigneeName: "TWO SISTERS",
          },
          {
            _id: {
              $oid: "643ee45c136fdf16278f1801",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 688.13,
            paidAmount: 688.13,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:52.426Z",
              },
              amount: 688.13,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0c44d1c3163d680670",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:43:21.000Z",
            },
            qbInvoiceId: "2B6DEB-1683240609",
            reference_number: "KPRO_M71848",
            invoiceNumber: "KPRO_C56",
            consigneeName: "WALLACE & CAREY LTD",
          },
        ],
        qbInvoicesId: [
          "2B6DEB-1683240609",
          "2B6DEB-1683240609",
          "2B6DEB-1683240609",
        ],
        referenceNums: ["KPRO_M71847", "KPRO_M71825", "KPRO_M71848"],
        amountSum: 1708.97,
        sameQbInvoiceId: "2B6DEB-1683240609",
        invoiceNumber: "KPRO_C56",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {},
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "648cc1bda28bf01649c714e5",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 444.03,
            paidAmount: 444.03,
            paymentHistory: {
              createdAt: {
                $date: "2023-08-08T20:56:36.543Z",
              },
              amount: 444.03,
              paymentDate: {
                $date: "2023-08-08T13:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "48380",
              _id: {
                $oid: "64d2ac0413e6d31626056023",
              },
            },
            billingDate: {
              $date: "2023-06-26T23:24:46.000Z",
            },
            qbInvoiceId: "2BB4D0-1687821927",
            reference_number: "KPRO_M73613",
            invoiceNumber: "KPRO_C297",
            consigneeName: "CLARKE A TRANSPORT SURREY",
          },
        ],
        qbInvoicesId: ["2BB4D0-1687821927"],
        referenceNums: ["KPRO_M73613"],
        amountSum: 444.03,
        sameQbInvoiceId: "2BB4D0-1687821927",
        invoiceNumber: "KPRO_C297",
      },
      neededPaymentId: "2C8A0C-1694749308",
    },
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "64935fc718e14b16694602e2",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 221.8,
            paidAmount: 221.8,
            paymentHistory: {
              createdAt: {
                $date: "2023-08-03T14:39:51.184Z",
              },
              amount: 221.8,
              paymentDate: {
                $date: "2023-08-03T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "48120",
              _id: {
                $oid: "64cbbc37ba4fa316069647dd",
              },
            },
            billingDate: {
              $date: "2023-06-23T00:14:06.000Z",
            },
            qbInvoiceId: "2BB2B6-1687479282",
            reference_number: "KPRO_E73723",
            invoiceNumber: "KPRO_C291",
            consigneeName: "CP VANCOUVER",
          },
        ],
        qbInvoicesId: ["2BB2B6-1687479282"],
        referenceNums: ["KPRO_E73723"],
        amountSum: 221.8,
        sameQbInvoiceId: "2BB2B6-1687479282",
        invoiceNumber: "KPRO_C291",
      },
      neededPaymentId: "2C5423-1694666384",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "6449317056ad2a1645a6868d",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 523.42,
            paidAmount: 523.42,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:56.097Z",
              },
              amount: 523.42,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c1044d1c3163d6806c9",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:26:10.000Z",
            },
            qbInvoiceId: "2B6DCC-1683240121",
            reference_number: "KPRO_M72087",
            invoiceNumber: "KPRO_C54",
            consigneeName: "CLARKE TRANSPORT INC.",
          },
          {
            _id: {
              $oid: "6447eb06039001167e6c0f27",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 508.34,
            paidAmount: 508.34,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:56.134Z",
              },
              amount: 508.34,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c1044d1c3163d6806ca",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:26:10.000Z",
            },
            qbInvoiceId: "2B6DCC-1683240121",
            reference_number: "KPRO_M72051",
            invoiceNumber: "KPRO_C54",
            consigneeName: "CLARKE TRANSPORT INC",
          },
          {
            _id: {
              $oid: "6447e8c45ba94f168b172eb5",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 449.66,
            paidAmount: 449.66,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:56.245Z",
              },
              amount: 449.66,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c1044d1c3163d6806cc",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:26:10.000Z",
            },
            qbInvoiceId: "2B6DCC-1683240121",
            reference_number: "KPRO_M72049",
            invoiceNumber: "KPRO_C54",
            consigneeName: "CLARKE TRANSPORT INC",
          },
          {
            _id: {
              $oid: "6447e9a2cad35e16005b5c32",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 510.42,
            paidAmount: 510.42,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:56.202Z",
              },
              amount: 510.42,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c1044d1c3163d6806cb",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:26:10.000Z",
            },
            qbInvoiceId: "2B6DCC-1683240121",
            reference_number: "KPRO_M72050",
            invoiceNumber: "KPRO_C54",
            consigneeName: "CLARKE TRANSPORT INC",
          },
        ],
        qbInvoicesId: [
          "2B6DCC-1683240121",
          "2B6DCC-1683240121",
          "2B6DCC-1683240121",
          "2B6DCC-1683240121",
        ],
        referenceNums: [
          "KPRO_M72087",
          "KPRO_M72051",
          "KPRO_M72049",
          "KPRO_M72050",
        ],
        amountSum: 1991.8400000000001,
        sameQbInvoiceId: "2B6DCC-1683240121",
        invoiceNumber: "KPRO_C54",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "646559dcd5baa216791cacbe",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 444.03,
            paidAmount: 444.03,
            paymentHistory: {
              createdAt: {
                $date: "2023-07-06T18:34:25.806Z",
              },
              amount: 444.03,
              paymentDate: {
                $date: "2023-07-06T18:22:07.970Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "47582",
              _id: {
                $oid: "64a70931a262f31699cb6c5f",
              },
            },
            billingDate: {
              $date: "2023-05-30T20:03:35.000Z",
            },
            qbInvoiceId: "2B90D8-1685715156",
            reference_number: "KPRO_M72818",
            invoiceNumber: "KPRO_C151",
            consigneeName: "CLARKE TRANSPORT INC.",
          },
        ],
        qbInvoicesId: ["2B90D8-1685715156"],
        referenceNums: ["KPRO_M72818"],
        amountSum: 444.03,
        sameQbInvoiceId: "2B90D8-1685715156",
        invoiceNumber: "KPRO_C151",
      },
      neededPaymentId: "2C826F-1694690419",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "64792c1c4f574b1687fb239d",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 444.03,
            paidAmount: 444.03,
            paymentHistory: {
              createdAt: {
                $date: "2023-08-03T14:39:52.468Z",
              },
              amount: 444.03,
              paymentDate: {
                $date: "2023-08-03T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "48120",
              _id: {
                $oid: "64cbbc38ba4fa316069647f5",
              },
            },
            billingDate: {
              $date: "2023-06-22T23:52:18.000Z",
            },
            qbInvoiceId: "2BB217-1687477967",
            reference_number: "KPRO_M73254",
            invoiceNumber: "KPRO_C285",
            consigneeName: "CLARKE TRANSPORT INC.",
          },
        ],
        qbInvoicesId: ["2BB217-1687477967"],
        referenceNums: ["KPRO_M73254"],
        amountSum: 444.03,
        sameQbInvoiceId: "2BB217-1687477967",
        invoiceNumber: "KPRO_C285",
      },
      neededPaymentId: "2C6A1F-1694679491",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "6428564b5723d615be0d5e7b",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 521.88,
            paidAmount: 521.88,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.501Z",
              },
              amount: 521.88,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d680685",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:44:02.000Z",
            },
            qbInvoiceId: "2B99C5-1685717105",
            reference_number: "KPRO_M71460",
            invoiceNumber: "KPRO_C70",
            consigneeName: "KLONDIKE COLD STORAGE SURREY",
          },
          {
            _id: {
              $oid: "6425aba3b5b53015fca724bd",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 432.81,
            paidAmount: 432.81,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.554Z",
              },
              amount: 432.81,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d680686",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:44:02.000Z",
            },
            qbInvoiceId: "2B99C5-1685717105",
            reference_number: "KPRO_M71420",
            invoiceNumber: "KPRO_C70",
            consigneeName: "PURDYS KINGSWAY",
          },
          {
            _id: {
              $oid: "642857bde3f59515e24d51d4",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 1283.75,
            paidAmount: 1283.75,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.455Z",
              },
              amount: 1283.75,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d680684",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:44:02.000Z",
            },
            qbInvoiceId: "2B99C5-1685717105",
            reference_number: "KPRO_M71461",
            invoiceNumber: "KPRO_C70",
            consigneeName: "WALLACE & CAREY LTD",
          },
        ],
        qbInvoicesId: [
          "2B99C5-1685717105",
          "2B99C5-1685717105",
          "2B99C5-1685717105",
        ],
        referenceNums: ["KPRO_M71460", "KPRO_M71420", "KPRO_M71461"],
        amountSum: 2238.44,
        sameQbInvoiceId: "2B99C5-1685717105",
        invoiceNumber: "KPRO_C70",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "6435b9baacaa9e15f075bf81",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 555.99,
            paidAmount: 555.99,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:52.789Z",
              },
              amount: 555.99,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0c44d1c3163d680676",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:47:44.000Z",
            },
            qbInvoiceId: "2B6E05-1683240912",
            reference_number: "KPRO_M71679",
            invoiceNumber: "KPRO_C58",
            consigneeName: "VERSACOLD SURREY",
          },
          {
            _id: {
              $oid: "643888b090e2bf1632b2650d",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 586.37,
            paidAmount: 586.37,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:52.733Z",
              },
              amount: 586.37,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0c44d1c3163d680675",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:47:44.000Z",
            },
            qbInvoiceId: "2B6E05-1683240912",
            reference_number: "KPRO_M71780",
            invoiceNumber: "KPRO_C58",
            consigneeName: "KLONDIKE COLD STORAGE",
          },
        ],
        qbInvoicesId: ["2B6E05-1683240912", "2B6E05-1683240912"],
        referenceNums: ["KPRO_M71679", "KPRO_M71780"],
        amountSum: 1142.3600000000001,
        sameQbInvoiceId: "2B6E05-1683240912",
        invoiceNumber: "KPRO_C58",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "644a83108f0bd115f0acc9db",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 367.86,
            paidAmount: 367.86,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.473Z",
              },
              amount: 367.86,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d68069c",
              },
            },
            billingDate: {
              $date: "2023-05-08T22:07:21.000Z",
            },
            qbInvoiceId: "2B95F8-1685716368",
            reference_number: "KPRO_E72154",
            invoiceNumber: "KPRO_C79",
            consigneeName: "GLOBAL GOURMET",
          },
          {
            _id: {
              $oid: "644ac7b8dd9e0315e238313b",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 388.9,
            paidAmount: 388.9,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.435Z",
              },
              amount: 388.9,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d68069b",
              },
            },
            billingDate: {
              $date: "2023-05-08T22:07:21.000Z",
            },
            qbInvoiceId: "2B95F8-1685716368",
            reference_number: "KPRO_E72177",
            invoiceNumber: "KPRO_C79",
            consigneeName: "BRADNER COLD STORAGE LTD",
          },
        ],
        qbInvoicesId: ["2B95F8-1685716368", "2B95F8-1685716368"],
        referenceNums: ["KPRO_E72154", "KPRO_E72177"],
        amountSum: 756.76,
        sameQbInvoiceId: "2B95F8-1685716368",
        invoiceNumber: "KPRO_C79",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {},
    {},
    {},
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "64512433889bbb165b212e96",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 110.7,
            paidAmount: 110.7,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:58:23.525Z",
              },
              amount: 110.7,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "46727",
              documentType: "ACH",
              _id: {
                $oid: "648a0dcf92d663165f9ae94c",
              },
            },
            billingDate: {
              $date: "2023-05-05T22:08:47.000Z",
            },
            qbInvoiceId: "2B6F89-1683324582",
            reference_number: "KPRO_E72334",
            invoiceNumber: "KPRO_C66",
            consigneeName: "CLARKE TRANSPORT INC.",
          },
          {
            _id: {
              $oid: "64557c5b8420a715f8cfe191",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 110.7,
            paidAmount: 110.7,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:58:23.440Z",
              },
              amount: 110.7,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "46727",
              documentType: "ACH",
              _id: {
                $oid: "648a0dcf92d663165f9ae94a",
              },
            },
            billingDate: {
              $date: "2023-05-05T22:08:47.000Z",
            },
            qbInvoiceId: "2B6F89-1683324582",
            reference_number: "KPRO_E72487",
            invoiceNumber: "KPRO_C66",
            consigneeName: "CLARKE TRANSPORT INC.",
          },
          {
            _id: {
              $oid: "6451243381332c16295e64e8",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 110.7,
            paidAmount: 110.7,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:58:23.560Z",
              },
              amount: 110.7,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "46727",
              documentType: "ACH",
              _id: {
                $oid: "648a0dcf92d663165f9ae94d",
              },
            },
            billingDate: {
              $date: "2023-05-05T22:08:47.000Z",
            },
            qbInvoiceId: "2B6F89-1683324582",
            reference_number: "KPRO_E72333",
            invoiceNumber: "KPRO_C66",
            consigneeName: "CLARKE TRANSPORT INC.",
          },
          {
            _id: {
              $oid: "64512434c5d2de162e68101e",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 110.7,
            paidAmount: 110.7,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:58:23.480Z",
              },
              amount: 110.7,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "46727",
              documentType: "ACH",
              _id: {
                $oid: "648a0dcf92d663165f9ae94b",
              },
            },
            billingDate: {
              $date: "2023-05-05T22:08:47.000Z",
            },
            qbInvoiceId: "2B6F89-1683324582",
            reference_number: "KPRO_E72337",
            invoiceNumber: "KPRO_C66",
            consigneeName: "CLARKE TRANSPORT INC.",
          },
          {
            _id: {
              $oid: "6451243354645e167916625c",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 110.7,
            paidAmount: 110.7,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:58:23.598Z",
              },
              amount: 110.7,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "46727",
              documentType: "ACH",
              _id: {
                $oid: "648a0dcf92d663165f9ae94e",
              },
            },
            billingDate: {
              $date: "2023-05-05T22:08:47.000Z",
            },
            qbInvoiceId: "2B6F89-1683324582",
            reference_number: "KPRO_E72332",
            invoiceNumber: "KPRO_C66",
            consigneeName: "CLARKE TRANSPORT INC.",
          },
          {
            _id: {
              $oid: "643d5fee8431f4157eeaad73",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 110.7,
            paidAmount: 110.7,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:58:23.633Z",
              },
              amount: 110.7,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "46727",
              documentType: "ACH",
              _id: {
                $oid: "648a0dcf92d663165f9ae94f",
              },
            },
            billingDate: {
              $date: "2023-05-05T22:08:47.000Z",
            },
            qbInvoiceId: "2B6F89-1683324582",
            reference_number: "KPRO_M71820",
            invoiceNumber: "KPRO_C66",
            consigneeName: "CLARKE TRANSPORT INC",
          },
        ],
        qbInvoicesId: [
          "2B6F89-1683324582",
          "2B6F89-1683324582",
          "2B6F89-1683324582",
          "2B6F89-1683324582",
          "2B6F89-1683324582",
          "2B6F89-1683324582",
        ],
        referenceNums: [
          "KPRO_E72334",
          "KPRO_E72487",
          "KPRO_E72333",
          "KPRO_E72337",
          "KPRO_E72332",
          "KPRO_M71820",
        ],
        amountSum: 664.2,
        sameQbInvoiceId: "2B6F89-1683324582",
        invoiceNumber: "KPRO_C66",
      },
      neededPaymentId: "2BC10D-1689025278",
    },
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "642864703b6fd815c5456041",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 397.08,
            paidAmount: 397.08,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.788Z",
              },
              amount: 397.08,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d6806a3",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:40:52.000Z",
            },
            qbInvoiceId: "2B9919-1685716937",
            reference_number: "KPRO_M71473",
            invoiceNumber: "KPRO_C69",
            consigneeName: "CJ LOGISTICS",
          },
          {
            _id: {
              $oid: "642c335998059715ea3000e2",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 557.75,
            paidAmount: 557.75,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.749Z",
              },
              amount: 557.75,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d6806a2",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:40:52.000Z",
            },
            qbInvoiceId: "2B9919-1685716937",
            reference_number: "KPRO_M71524",
            invoiceNumber: "KPRO_C69",
            consigneeName: "SNOWCREST FOODS LTD",
          },
        ],
        qbInvoicesId: ["2B9919-1685716937", "2B9919-1685716937"],
        referenceNums: ["KPRO_M71473", "KPRO_M71524"],
        amountSum: 954.8299999999999,
        sameQbInvoiceId: "2B9919-1685716937",
        invoiceNumber: "KPRO_C69",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "642c9a602c12b715e82fb85a",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 600.39,
            paidAmount: 600.39,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.647Z",
              },
              amount: 600.39,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d680688",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:47:19.000Z",
            },
            qbInvoiceId: "2B989E-1685716849",
            reference_number: "KPRO_M71544",
            invoiceNumber: "KPRO_C71",
            consigneeName: "WALLACE & CAREY LTD",
          },
          {
            _id: {
              $oid: "642f0545963ebb15fb98acc9",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 464.85,
            paidAmount: 464.85,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.607Z",
              },
              amount: 464.85,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d680687",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:47:19.000Z",
            },
            qbInvoiceId: "2B989E-1685716849",
            reference_number: "KPRO_M71592",
            invoiceNumber: "KPRO_C71",
            consigneeName: "ANIPET ANIMAL SUPPLIES",
          },
        ],
        qbInvoicesId: ["2B989E-1685716849", "2B989E-1685716849"],
        referenceNums: ["KPRO_M71544", "KPRO_M71592"],
        amountSum: 1065.24,
        sameQbInvoiceId: "2B989E-1685716849",
        invoiceNumber: "KPRO_C71",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "6435a50bc4ac6a15d6dc0550",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 404.09,
            paidAmount: 404.09,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.919Z",
              },
              amount: 404.09,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d68068e",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:54:43.000Z",
            },
            qbInvoiceId: "2B9694-1685716515",
            reference_number: "KPRO_E71673",
            invoiceNumber: "KPRO_C74",
            consigneeName: "TAS REFRIGERATED DISTRIBUTION",
          },
          {
            _id: {
              $oid: "6436bff25f473c15bc4ed40e",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 327.8,
            paidAmount: 327.8,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.804Z",
              },
              amount: 327.8,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d68068c",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:54:43.000Z",
            },
            qbInvoiceId: "2B9694-1685716515",
            reference_number: "KPRO_E71746",
            invoiceNumber: "KPRO_C74",
            consigneeName: "FROBISHER INTERNATIONAL",
          },
          {
            _id: {
              $oid: "6435a8a8143806164cbf6057",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 258.73,
            paidAmount: 258.73,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.854Z",
              },
              amount: 258.73,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d68068d",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:54:43.000Z",
            },
            qbInvoiceId: "2B9694-1685716515",
            reference_number: "KPRO_E71675",
            invoiceNumber: "KPRO_C74",
            consigneeName: "SAPUTO DAIRY PRODUCTS",
          },
          {
            _id: {
              $oid: "64385fb77934ff162ecdcf2e",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 607.27,
            paidAmount: 607.27,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.767Z",
              },
              amount: 607.27,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d68068b",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:54:43.000Z",
            },
            qbInvoiceId: "2B9694-1685716515",
            reference_number: "KPRO_E71779",
            invoiceNumber: "KPRO_C74",
            consigneeName: "SNOWCREST FOODS LTD",
          },
        ],
        qbInvoicesId: [
          "2B9694-1685716515",
          "2B9694-1685716515",
          "2B9694-1685716515",
          "2B9694-1685716515",
        ],
        referenceNums: [
          "KPRO_E71673",
          "KPRO_E71746",
          "KPRO_E71675",
          "KPRO_E71779",
        ],
        amountSum: 1597.8899999999999,
        sameQbInvoiceId: "2B9694-1685716515",
        invoiceNumber: "KPRO_C74",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "644984675098f6161127d94a",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 221.8,
            paidAmount: 221.8,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.393Z",
              },
              amount: 221.8,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d68069a",
              },
            },
            billingDate: {
              $date: "2023-05-08T22:06:20.000Z",
            },
            qbInvoiceId: "2B962B-1685716405",
            reference_number: "KPRO_E72118",
            invoiceNumber: "KPRO_C78",
            consigneeName: "CP VANCOUVER INTERMODAL",
          },
          {
            _id: {
              $oid: "6449872636192e1637dbbfc0",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 334.21,
            paidAmount: 334.21,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.356Z",
              },
              amount: 334.21,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d680699",
              },
            },
            billingDate: {
              $date: "2023-05-08T22:06:20.000Z",
            },
            qbInvoiceId: "2B962B-1685716405",
            reference_number: "KPRO_E72121",
            invoiceNumber: "KPRO_C78",
            consigneeName: "OLYMPIA TRANSPORT C/O 18 WHEELS",
          },
        ],
        qbInvoicesId: ["2B962B-1685716405", "2B962B-1685716405"],
        referenceNums: ["KPRO_E72118", "KPRO_E72121"],
        amountSum: 556.01,
        sameQbInvoiceId: "2B962B-1685716405",
        invoiceNumber: "KPRO_C78",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "64403deec2288515e31160ab",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 345.3,
            paidAmount: 345.3,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.184Z",
              },
              amount: 345.3,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d680695",
              },
            },
            billingDate: {
              $date: "2023-05-08T22:01:28.000Z",
            },
            qbInvoiceId: "2B9B59-1685717560",
            reference_number: "KPRO_E71896",
            invoiceNumber: "KPRO_C76",
            consigneeName: "SEASIA FOODS LTD C/O HCOLD STORAGE",
          },
          {
            _id: {
              $oid: "64403ea7127bd7162360b669",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 345.3,
            paidAmount: 345.3,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.143Z",
              },
              amount: 345.3,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d680694",
              },
            },
            billingDate: {
              $date: "2023-05-08T22:01:28.000Z",
            },
            qbInvoiceId: "2B9B59-1685717560",
            reference_number: "KPRO_E71897",
            invoiceNumber: "KPRO_C76",
            consigneeName: "SEASIA FOODS LTD C/O HCOLD STORAGE",
          },
          {
            _id: {
              $oid: "644166d456fe9f1645bc1345",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 374.39,
            paidAmount: 374.39,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.106Z",
              },
              amount: 374.39,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d680693",
              },
            },
            billingDate: {
              $date: "2023-05-08T22:01:28.000Z",
            },
            qbInvoiceId: "2B9B59-1685717560",
            reference_number: "KPRO_E71911",
            invoiceNumber: "KPRO_C76",
            consigneeName: "GLOBAL GOURMET",
          },
        ],
        qbInvoicesId: [
          "2B9B59-1685717560",
          "2B9B59-1685717560",
          "2B9B59-1685717560",
        ],
        referenceNums: ["KPRO_E71896", "KPRO_E71897", "KPRO_E71911"],
        amountSum: 1064.99,
        sameQbInvoiceId: "2B9B59-1685717560",
        invoiceNumber: "KPRO_C76",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "6435b697268ec6163ac8154d",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 449.66,
            paidAmount: 449.66,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.558Z",
              },
              amount: 449.66,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d68069e",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:36:43.000Z",
            },
            qbInvoiceId: "2B96DD-1685716558",
            reference_number: "KPRO_M71677",
            invoiceNumber: "KPRO_C67",
            consigneeName: "SAPUTO DAIRY PRODUCTS",
          },
          {
            _id: {
              $oid: "6436fbd5cfcdac15f4e2f9f0",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 528.54,
            paidAmount: 528.54,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.517Z",
              },
              amount: 528.54,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d68069d",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:36:43.000Z",
            },
            qbInvoiceId: "2B96DD-1685716558",
            reference_number: "KPRO_M71762",
            invoiceNumber: "KPRO_C67",
            consigneeName: "BRADNER COLD STORAGE LTD",
          },
          {
            _id: {
              $oid: "643598e5baec1a161eac6f13",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 707.9,
            paidAmount: 707.9,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.604Z",
              },
              amount: 707.9,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d68069f",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:36:43.000Z",
            },
            qbInvoiceId: "2B96DD-1685716558",
            reference_number: "KPRO_M71671",
            invoiceNumber: "KPRO_C67",
            consigneeName: "COLDSTAR SOLUTIONS INC.",
          },
        ],
        qbInvoicesId: [
          "2B96DD-1685716558",
          "2B96DD-1685716558",
          "2B96DD-1685716558",
        ],
        referenceNums: ["KPRO_M71677", "KPRO_M71762", "KPRO_M71671"],
        amountSum: 1686.1,
        sameQbInvoiceId: "2B96DD-1685716558",
        invoiceNumber: "KPRO_C67",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "6452da22733c2e046dded69b",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 221.8,
            paidAmount: 221.8,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:58:23.302Z",
              },
              amount: 221.8,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "46727",
              documentType: "ACH",
              _id: {
                $oid: "648a0dcf92d663165f9ae947",
              },
            },
            billingDate: {
              $date: "2023-05-05T22:06:02.000Z",
            },
            qbInvoiceId: "2B6F7D-1683324432",
            reference_number: "KPRO_E72422",
            invoiceNumber: "KPRO_C65",
            consigneeName: "CN VANCOUVER",
          },
          {
            _id: {
              $oid: "6452da22a5a77e16303e7bbb",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 221.8,
            paidAmount: 221.8,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:58:23.345Z",
              },
              amount: 221.8,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "46727",
              documentType: "ACH",
              _id: {
                $oid: "648a0dcf92d663165f9ae948",
              },
            },
            billingDate: {
              $date: "2023-05-05T22:06:02.000Z",
            },
            qbInvoiceId: "2B6F7D-1683324432",
            reference_number: "KPRO_E72421",
            invoiceNumber: "KPRO_C65",
            consigneeName: "CN VANCOUVER",
          },
          {
            _id: {
              $oid: "6452d9b3dc7b170b161a09ca",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 221.8,
            paidAmount: 221.8,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:58:23.393Z",
              },
              amount: 221.8,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "46727",
              documentType: "ACH",
              _id: {
                $oid: "648a0dcf92d663165f9ae949",
              },
            },
            billingDate: {
              $date: "2023-05-05T22:06:02.000Z",
            },
            qbInvoiceId: "2B6F7D-1683324432",
            reference_number: "KPRO_E72420",
            invoiceNumber: "KPRO_C65",
            consigneeName: "CN VANCOUVER",
          },
        ],
        qbInvoicesId: [
          "2B6F7D-1683324432",
          "2B6F7D-1683324432",
          "2B6F7D-1683324432",
        ],
        referenceNums: ["KPRO_E72422", "KPRO_E72421", "KPRO_E72420"],
        amountSum: 665.4000000000001,
        sameQbInvoiceId: "2B6F7D-1683324432",
        invoiceNumber: "KPRO_C65",
      },
      neededPaymentId: "2BC10D-1689025278",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "6436f252458eaf1606961bc2",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 373.7,
            paidAmount: 373.7,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:52.622Z",
              },
              amount: 373.7,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0c44d1c3163d680673",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:47:04.000Z",
            },
            qbInvoiceId: "2B6DFA-1683240767",
            reference_number: "KPRO_M71761",
            invoiceNumber: "KPRO_C57",
            consigneeName: "WALLACE & CAREY LTD",
          },
          {
            _id: {
              $oid: "6436ef2661cca016193a7b53",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 571.18,
            paidAmount: 571.18,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:52.661Z",
              },
              amount: 571.18,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0c44d1c3163d680674",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:47:04.000Z",
            },
            qbInvoiceId: "2B6DFA-1683240767",
            reference_number: "KPRO_M71758",
            invoiceNumber: "KPRO_C57",
            consigneeName: "SOBEYS",
          },
        ],
        qbInvoicesId: ["2B6DFA-1683240767", "2B6DFA-1683240767"],
        referenceNums: ["KPRO_M71761", "KPRO_M71758"],
        amountSum: 944.8799999999999,
        sameQbInvoiceId: "2B6DFA-1683240767",
        invoiceNumber: "KPRO_C57",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "642f1ea90c927c14882f644e",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 367.86,
            paidAmount: 367.86,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.255Z",
              },
              amount: 367.86,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d680680",
              },
            },
            billingDate: {
              $date: "2023-05-04T23:31:34.000Z",
            },
            qbInvoiceId: "2B6E8F-1683243212",
            reference_number: "KPRO_E71612",
            invoiceNumber: "KPRO_C64",
            consigneeName: "SEASIA FOODS LTD C/O HCOLD STORAGE",
          },
          {
            _id: {
              $oid: "642f1e820c927c14882f643d",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 367.86,
            paidAmount: 367.86,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.293Z",
              },
              amount: 367.86,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d680681",
              },
            },
            billingDate: {
              $date: "2023-05-04T23:31:34.000Z",
            },
            qbInvoiceId: "2B6E8F-1683243212",
            reference_number: "KPRO_E71611",
            invoiceNumber: "KPRO_C64",
            consigneeName: "SEASIA FOODS LTD C/O HCOLD STORAGE",
          },
          {
            _id: {
              $oid: "642f17c9bfb7bd14e8034388",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 367.86,
            paidAmount: 367.86,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.407Z",
              },
              amount: 367.86,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d680683",
              },
            },
            billingDate: {
              $date: "2023-05-04T23:31:34.000Z",
            },
            qbInvoiceId: "2B6E8F-1683243212",
            reference_number: "KPRO_E71609",
            invoiceNumber: "KPRO_C64",
            consigneeName: "KANATA HOLDINGS LTD",
          },
          {
            _id: {
              $oid: "642f1907527a2f148fdafa47",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 367.86,
            paidAmount: 367.86,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.369Z",
              },
              amount: 367.86,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d680682",
              },
            },
            billingDate: {
              $date: "2023-05-04T23:31:34.000Z",
            },
            qbInvoiceId: "2B6E8F-1683243212",
            reference_number: "KPRO_E71610",
            invoiceNumber: "KPRO_C64",
            consigneeName: "SEASIA FOODS LTD C/O HCOLD STORAGE",
          },
        ],
        qbInvoicesId: [
          "2B6E8F-1683243212",
          "2B6E8F-1683243212",
          "2B6E8F-1683243212",
          "2B6E8F-1683243212",
        ],
        referenceNums: [
          "KPRO_E71612",
          "KPRO_E71611",
          "KPRO_E71609",
          "KPRO_E71610",
        ],
        amountSum: 1471.44,
        sameQbInvoiceId: "2B6E8F-1683243212",
        invoiceNumber: "KPRO_C64",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "645154ebeb5e681650685cac",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 485.53,
            paidAmount: 485.53,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:58:23.916Z",
              },
              amount: 485.53,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "46727",
              documentType: "ACH",
              _id: {
                $oid: "648a0dcf92d663165f9ae955",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:59:24.000Z",
            },
            qbInvoiceId: "2B6EA6-1683244928",
            reference_number: "KPRO_R72354",
            invoiceNumber: "KPRO_C59",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64497d93aec5f11664906ce2",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 514.85,
            paidAmount: 514.85,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:58:23.993Z",
              },
              amount: 514.85,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "46727",
              documentType: "ACH",
              _id: {
                $oid: "648a0dcf92d663165f9ae957",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:59:24.000Z",
            },
            qbInvoiceId: "2B6EA6-1683244928",
            reference_number: "KPRO_R72104",
            invoiceNumber: "KPRO_C59",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "645154d2eb5e681650685c9a",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 517.03,
            paidAmount: 517.03,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:58:23.953Z",
              },
              amount: 517.03,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "46727",
              documentType: "ACH",
              _id: {
                $oid: "648a0dcf92d663165f9ae956",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:59:24.000Z",
            },
            qbInvoiceId: "2B6EA6-1683244928",
            reference_number: "KPRO_R72353",
            invoiceNumber: "KPRO_C59",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64481b30d2401015ed2f7d4f",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 518.15,
            paidAmount: 518.15,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:58:24.043Z",
              },
              amount: 518.15,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "46727",
              documentType: "ACH",
              _id: {
                $oid: "648a0dd092d663165f9ae958",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:59:24.000Z",
            },
            qbInvoiceId: "2B6EA6-1683244928",
            reference_number: "KPRO_R72068",
            invoiceNumber: "KPRO_C59",
            consigneeName: "CLARKE FINISH",
          },
        ],
        qbInvoicesId: [
          "2B6EA6-1683244928",
          "2B6EA6-1683244928",
          "2B6EA6-1683244928",
          "2B6EA6-1683244928",
        ],
        referenceNums: [
          "KPRO_R72354",
          "KPRO_R72104",
          "KPRO_R72353",
          "KPRO_R72068",
        ],
        amountSum: 2035.56,
        sameQbInvoiceId: "2B6EA6-1683244928",
        invoiceNumber: "KPRO_C59",
      },
      neededPaymentId: "2BC10D-1689025278",
    },
    {},
    {},
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "642863ca2a8dd81603deb2be",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 328.91,
            paidAmount: 328.91,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.705Z",
              },
              amount: 328.91,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d6806a1",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:39:14.000Z",
            },
            qbInvoiceId: "2B9957-1685716996",
            reference_number: "KPRO_M71472",
            invoiceNumber: "KPRO_C68",
            consigneeName: "FROBISHER INTERNATIONAL",
          },
          {
            _id: {
              $oid: "642b0b3c4568c21633944ded",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 373.7,
            paidAmount: 373.7,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:54.652Z",
              },
              amount: 373.7,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0e44d1c3163d6806a0",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:39:14.000Z",
            },
            qbInvoiceId: "2B9957-1685716996",
            reference_number: "KPRO_M71505",
            invoiceNumber: "KPRO_C68",
            consigneeName: "SEASIA FOODS LTD C/O HCOLD STORAGE",
          },
        ],
        qbInvoicesId: ["2B9957-1685716996", "2B9957-1685716996"],
        referenceNums: ["KPRO_M71472", "KPRO_M71505"],
        amountSum: 702.61,
        sameQbInvoiceId: "2B9957-1685716996",
        invoiceNumber: "KPRO_C68",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "6442f08b92726816016c9c2f",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 455.5,
            paidAmount: 455.5,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:52.321Z",
              },
              amount: 455.5,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0c44d1c3163d68066e",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:30:17.000Z",
            },
            qbInvoiceId: "2B6DE0-1683240446",
            reference_number: "KPRO_M71939",
            invoiceNumber: "KPRO_C55",
            consigneeName: "KLONDIKE COLD STORAGE SURREY",
          },
          {
            _id: {
              $oid: "64416cf0c1ac2c1619c2c065",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 571.18,
            paidAmount: 571.18,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:52.370Z",
              },
              amount: 571.18,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0c44d1c3163d68066f",
              },
            },
            billingDate: {
              $date: "2023-05-02T23:30:17.000Z",
            },
            qbInvoiceId: "2B6DE0-1683240446",
            reference_number: "KPRO_M71914",
            invoiceNumber: "KPRO_C55",
            consigneeName: "VERSACOLD SURREY",
          },
        ],
        qbInvoicesId: ["2B6DE0-1683240446", "2B6DE0-1683240446"],
        referenceNums: ["KPRO_M71939", "KPRO_M71914"],
        amountSum: 1026.6799999999998,
        sameQbInvoiceId: "2B6DE0-1683240446",
        invoiceNumber: "KPRO_C55",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "64cd5902c887ea160ee08190",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 418.43,
            paidAmount: 418.43,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:18.334Z",
              },
              _id: {
                $oid: "650db99ad9702a15cf6fbe11",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 418.43,
            },
            billingDate: {
              $date: "2023-08-15T21:04:45.000Z",
            },
            qbInvoiceId: "2BF457-1692133554",
            reference_number: "KPRO_R74708",
            invoiceNumber: "KPRO_C416",
            consigneeName: "CLARKE FINISH",
          },
          {
            _id: {
              $oid: "64dbe7f04c50c615b52adf2e",
            },
            billingDate: {
              $date: "2023-08-15T21:04:45.000Z",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 445.98,
            paidAmount: 445.98,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:18.198Z",
              },
              _id: {
                $oid: "650db99ad9702a15cf6fbe0f",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 445.98,
            },
            qbInvoiceId: "2BF457-1692133554",
            reference_number: "KPRO_B74950",
            invoiceNumber: "KPRO_C416",
          },
          {
            _id: {
              $oid: "64d2c86128fd8e15c1f6001e",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 428.78,
            paidAmount: 428.78,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:18.273Z",
              },
              _id: {
                $oid: "650db99ad9702a15cf6fbe10",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 428.78,
            },
            billingDate: {
              $date: "2023-08-15T21:04:45.000Z",
            },
            qbInvoiceId: "2BF457-1692133554",
            reference_number: "KPRO_R74734",
            invoiceNumber: "KPRO_C416",
            consigneeName: "CLARKE FINISH",
          },
        ],
        qbInvoicesId: [
          "2BF457-1692133554",
          "2BF457-1692133554",
          "2BF457-1692133554",
        ],
        referenceNums: ["KPRO_R74708", "KPRO_B74950", "KPRO_R74734"],
        amountSum: 1293.19,
        sameQbInvoiceId: "2BF457-1692133554",
        invoiceNumber: "KPRO_C416",
      },
      neededPaymentId: "2CA5CC-1695398358",
    },
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "642ca190f3091f15cbbe40af",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 336.25,
            paidAmount: 336.25,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.124Z",
              },
              amount: 336.25,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d68067d",
              },
            },
            billingDate: {
              $date: "2023-05-04T23:23:30.000Z",
            },
            qbInvoiceId: "2B6E57-1683242715",
            reference_number: "KPRO_E71546",
            invoiceNumber: "KPRO_C62",
            consigneeName: "CP VANCOUVER INTERMODAL",
          },
          {
            _id: {
              $oid: "642ca3193a136c16233d947a",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 373.44,
            paidAmount: 373.44,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.078Z",
              },
              amount: 373.44,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d68067c",
              },
            },
            billingDate: {
              $date: "2023-05-04T23:23:30.000Z",
            },
            qbInvoiceId: "2B6E57-1683242715",
            reference_number: "KPRO_E71547",
            invoiceNumber: "KPRO_C62",
            consigneeName: "KANATA HOLDINGS LTD",
          },
          {
            _id: {
              $oid: "642dda3c37ea0d15e187c94d",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 689.85,
            paidAmount: 689.85,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.038Z",
              },
              amount: 689.85,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d68067b",
              },
            },
            billingDate: {
              $date: "2023-05-04T23:23:30.000Z",
            },
            qbInvoiceId: "2B6E57-1683242715",
            reference_number: "KPRO_E71575",
            invoiceNumber: "KPRO_C62",
            consigneeName: "ABBYWRAP PACKAGING LTD.",
          },
        ],
        qbInvoicesId: [
          "2B6E57-1683242715",
          "2B6E57-1683242715",
          "2B6E57-1683242715",
        ],
        referenceNums: ["KPRO_E71546", "KPRO_E71547", "KPRO_E71575"],
        amountSum: 1399.54,
        sameQbInvoiceId: "2B6E57-1683242715",
        invoiceNumber: "KPRO_C62",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "64690a97b97e70166dad682b",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 444.03,
            paidAmount: 444.03,
            paymentHistory: {
              createdAt: {
                $date: "2023-07-06T18:34:26.194Z",
              },
              amount: 444.03,
              paymentDate: {
                $date: "2023-07-06T18:22:07.970Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "47582",
              _id: {
                $oid: "64a70932a262f31699cb6c63",
              },
            },
            billingDate: {
              $date: "2023-05-30T20:06:09.000Z",
            },
            qbInvoiceId: "2B9006-1685715024",
            reference_number: "KPRO_M72895",
            invoiceNumber: "KPRO_C152",
            consigneeName: "CLARKE TRANSPORT INC.",
          },
        ],
        qbInvoicesId: ["2B9006-1685715024"],
        referenceNums: ["KPRO_M72895"],
        amountSum: 444.03,
        sameQbInvoiceId: "2B9006-1685715024",
        invoiceNumber: "KPRO_C152",
      },
      neededPaymentId: "2C88C9-1694749240",
    },
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "648a21872b260f16ad03fba1",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 444.03,
            paidAmount: 444.03,
            paymentHistory: {
              createdAt: {
                $date: "2023-08-08T20:56:36.731Z",
              },
              amount: 444.03,
              paymentDate: {
                $date: "2023-08-08T13:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "48380",
              _id: {
                $oid: "64d2ac0413e6d31626056026",
              },
            },
            billingDate: {
              $date: "2023-06-26T23:23:35.000Z",
            },
            qbInvoiceId: "2BB4C8-1687821850",
            reference_number: "KPRO_M73543",
            invoiceNumber: "KPRO_C296",
            consigneeName: "CLARKE TRANSPORT INC.",
          },
        ],
        qbInvoicesId: ["2BB4C8-1687821850"],
        referenceNums: ["KPRO_M73543"],
        amountSum: 444.03,
        sameQbInvoiceId: "2BB4C8-1687821850",
        invoiceNumber: "KPRO_C296",
      },
      neededPaymentId: "2C751B-1694685283",
    },
    {},
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "64dbe9dfe31d5e15fd2e9b4f",
            },
            billingDate: {
              $date: "2023-08-15T21:14:10.000Z",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 370.26,
            paidAmount: 370.26,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:20.693Z",
              },
              _id: {
                $oid: "650db99cd9702a15cf6fbe2d",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 370.26,
            },
            qbInvoiceId: "2BF45F-1692134110",
            reference_number: "KPRO_B74953",
            invoiceNumber: "KPRO_C417",
          },
          {
            _id: {
              $oid: "64dbea3996681015e7e3b8e7",
            },
            billingDate: {
              $date: "2023-08-15T21:14:10.000Z",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 437.11,
            paidAmount: 437.11,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:20.645Z",
              },
              _id: {
                $oid: "650db99cd9702a15cf6fbe2c",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 437.11,
            },
            qbInvoiceId: "2BF45F-1692134110",
            reference_number: "KPRO_B74954",
            invoiceNumber: "KPRO_C417",
          },
          {
            _id: {
              $oid: "64dbe8ec5798471637bea740",
            },
            billingDate: {
              $date: "2023-08-15T21:14:10.000Z",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 433.48,
            paidAmount: 433.48,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:20.799Z",
              },
              _id: {
                $oid: "650db99cd9702a15cf6fbe2f",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 433.48,
            },
            qbInvoiceId: "2BF45F-1692134110",
            reference_number: "KPRO_B74951",
            invoiceNumber: "KPRO_C417",
          },
          {
            _id: {
              $oid: "64dbe9644395f716295fcafd",
            },
            billingDate: {
              $date: "2023-08-15T21:14:10.000Z",
            },
            callerName: "CLARKE A TRANSPORT SURREY",
            totalAmount: 565.98,
            paidAmount: 565.98,
            paymentHistory: {
              createdAt: {
                $date: "2023-09-22T15:58:20.738Z",
              },
              _id: {
                $oid: "650db99cd9702a15cf6fbe2e",
              },
              checkNo: "49919",
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              paymentDate: {
                $date: "2023-09-22T15:56:30.661Z",
              },
              amount: 565.98,
            },
            qbInvoiceId: "2BF45F-1692134110",
            reference_number: "KPRO_B74952",
            invoiceNumber: "KPRO_C417",
          },
        ],
        qbInvoicesId: [
          "2BF45F-1692134110",
          "2BF45F-1692134110",
          "2BF45F-1692134110",
          "2BF45F-1692134110",
        ],
        referenceNums: [
          "KPRO_B74953",
          "KPRO_B74954",
          "KPRO_B74951",
          "KPRO_B74952",
        ],
        amountSum: 1806.83,
        sameQbInvoiceId: "2BF45F-1692134110",
        invoiceNumber: "KPRO_C417",
      },
      neededPaymentId: "2CA5CC-1695398358",
    },
    {},
    {},
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "642f0a2387370e15f87c9403",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 455,
            paidAmount: 455,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.211Z",
              },
              amount: 455,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d68067f",
              },
            },
            billingDate: {
              $date: "2023-05-04T23:29:07.000Z",
            },
            qbInvoiceId: "2B6E85-1683242953",
            reference_number: "KPRO_E71595",
            invoiceNumber: "KPRO_C63",
            consigneeName: "HOUSE OF SHER",
          },
          {
            _id: {
              $oid: "6431a4b0ff0bc415b38a986c",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 225,
            paidAmount: 225,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.169Z",
              },
              amount: 225,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d68067e",
              },
            },
            billingDate: {
              $date: "2023-05-04T23:29:07.000Z",
            },
            qbInvoiceId: "2B6E85-1683242953",
            reference_number: "KPRO_E71639",
            invoiceNumber: "KPRO_C63",
            consigneeName: "CP VANCOUVER",
          },
        ],
        qbInvoicesId: ["2B6E85-1683242953", "2B6E85-1683242953"],
        referenceNums: ["KPRO_E71595", "KPRO_E71639"],
        amountSum: 680,
        sameQbInvoiceId: "2B6E85-1683242953",
        invoiceNumber: "KPRO_C63",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "6452ca9e8ff5bc17b39e1c7f",
            },
            callerName: "CLARKE TRANSPORT INC.",
            totalAmount: 221.8,
            paidAmount: 221.8,
            paymentHistory: {
              createdAt: {
                $date: "2023-07-06T18:34:26.619Z",
              },
              amount: 221.8,
              paymentDate: {
                $date: "2023-07-06T18:22:07.970Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "47582",
              _id: {
                $oid: "64a70932a262f31699cb6c69",
              },
            },
            billingDate: {
              $date: "2023-05-30T20:11:08.000Z",
            },
            qbInvoiceId: "2B943E-1685715774",
            reference_number: "KPRO_E72418",
            invoiceNumber: "KPRO_C153",
            consigneeName: "CN VANCOUVER",
          },
        ],
        qbInvoicesId: ["2B943E-1685715774"],
        referenceNums: ["KPRO_E72418"],
        amountSum: 221.8,
        sameQbInvoiceId: "2B943E-1685715774",
        invoiceNumber: "KPRO_C153",
      },
      neededPaymentId: "2C5A80-1694666606",
    },
    {},
    {
      combineInvoice: {
        originalObj: [
          {
            _id: {
              $oid: "64358349f9294015c9b1e421",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 890.18,
            paidAmount: 890.18,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.726Z",
              },
              amount: 890.18,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d68068a",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:52:53.000Z",
            },
            qbInvoiceId: "2B9803-1685716732",
            reference_number: "KPRO_E71666",
            invoiceNumber: "KPRO_C73",
            consigneeName: "TROPHY NURSERIES",
          },
          {
            _id: {
              $oid: "6435858c50720a160dcac4d5",
            },
            callerName: "QUIKTRAX INTERMODAL",
            totalAmount: 571.18,
            paidAmount: 571.18,
            paymentHistory: {
              createdAt: {
                $date: "2023-06-14T18:50:53.690Z",
              },
              amount: 571.18,
              paymentDate: {
                $date: "2023-06-14T07:00:00.000Z",
              },
              createdBy: {
                $oid: "63f93765625de015c40bf697",
              },
              checkNo: "dd",
              documentType: "ACH",
              _id: {
                $oid: "648a0c0d44d1c3163d680689",
              },
            },
            billingDate: {
              $date: "2023-05-08T21:52:53.000Z",
            },
            qbInvoiceId: "2B9803-1685716732",
            reference_number: "KPRO_E71668",
            invoiceNumber: "KPRO_C73",
            consigneeName: "DIVERSITREE",
          },
        ],
        qbInvoicesId: ["2B9803-1685716732", "2B9803-1685716732"],
        referenceNums: ["KPRO_E71666", "KPRO_E71668"],
        amountSum: 1461.36,
        sameQbInvoiceId: "2B9803-1685716732",
        invoiceNumber: "KPRO_C73",
      },
      neededPaymentId: "2BC292-1689026209",
    },
    {
  },
  {
  },
  {
  },
  {
  },
  {
  },
  {
  },
  {
    combineInvoice: {
      originalObj: [
        {
          _id: {
            $oid: "645124335910f41623b34500",
          },
          callerName: "CLARKE TRANSPORT INC.",
          totalAmount: 110.7,
          paidAmount: 110.7,
          paymentHistory: {
            createdAt: {
              $date: "2023-06-26T19:09:36.603Z",
            },
            amount: 110.7,
            paymentDate: {
              $date: "2023-06-26T13:00:00.000Z",
            },
            createdBy: {
              $oid: "63f93765625de015c40bf697",
            },
            checkNo: "46900 DD",
            _id: {
              $oid: "6499e27006425d1616a72ea3",
            },
          },
          billingDate: {
            $date: "2023-05-11T23:32:56.000Z",
          },
          qbInvoiceId: "2B953B-1685716257",
          reference_number: "KPRO_E72331",
          invoiceNumber: "KPRO_C83",
          consigneeName: "CLARKE TRANSPORT INC.",
        },
      ],
      qbInvoicesId: [
        "2B953B-1685716257",
      ],
      referenceNums: [
        "KPRO_E72331",
      ],
      amountSum: 110.7,
      sameQbInvoiceId: "2B953B-1685716257",
      invoiceNumber: "KPRO_C83",
    },
    neededPaymentId: "2C8134-1694690352",
  },
  {
  },
  {
  },
  {
    combineInvoice: {
      originalObj: [
        {
          _id: {
            $oid: "643e9f57e58dc51604de8668",
          },
          callerName: "QUIKTRAX INTERMODAL",
          totalAmount: 542.86,
          paidAmount: 542.86,
          paymentHistory: {
            createdAt: {
              $date: "2023-06-14T18:50:54.024Z",
            },
            amount: 542.86,
            paymentDate: {
              $date: "2023-06-14T07:00:00.000Z",
            },
            createdBy: {
              $oid: "63f93765625de015c40bf697",
            },
            checkNo: "dd",
            documentType: "ACH",
            _id: {
              $oid: "648a0c0e44d1c3163d680691",
            },
          },
          billingDate: {
            $date: "2023-05-08T21:57:04.000Z",
          },
          qbInvoiceId: "2B9BD2-1685717674",
          reference_number: "KPRO_E71845",
          invoiceNumber: "KPRO_C75",
          consigneeName: "EVERGREEN PROPAGATORS",
        },
        {
          _id: {
            $oid: "643e9ec6d84cb816261d2f51",
          },
          callerName: "QUIKTRAX INTERMODAL",
          totalAmount: 587.48,
          paidAmount: 587.48,
          paymentHistory: {
            createdAt: {
              $date: "2023-06-14T18:50:54.062Z",
            },
            amount: 587.48,
            paymentDate: {
              $date: "2023-06-14T07:00:00.000Z",
            },
            createdBy: {
              $oid: "63f93765625de015c40bf697",
            },
            checkNo: "dd",
            documentType: "ACH",
            _id: {
              $oid: "648a0c0e44d1c3163d680692",
            },
          },
          billingDate: {
            $date: "2023-05-08T21:57:04.000Z",
          },
          qbInvoiceId: "2B9BD2-1685717674",
          reference_number: "KPRO_E71844",
          invoiceNumber: "KPRO_C75",
          consigneeName: "EVERGREEN PROPAGATORS",
        },
      ],
      qbInvoicesId: [
        "2B9BD2-1685717674",
        "2B9BD2-1685717674",
      ],
      referenceNums: [
        "KPRO_E71845",
        "KPRO_E71844",
      ],
      amountSum: 1130.3400000000001,
      sameQbInvoiceId: "2B9BD2-1685717674",
      invoiceNumber: "KPRO_C75",
    },
    neededPaymentId: "2BC292-1689026209",
  },
  {
  },
  ];

  const allRefNums = [];
for (const combineInvoice of finalList) {
    const allRef = combineInvoice?.combineInvoice?.referenceNums;

    if(allRef?.length){
        allRefNums.push(...allRef);
    }
}
console.log(allRefNums)
const bulkWriteArray = [];
for (let index = 0; index < finalList.length; index++) {
    const element = finalList[index];
    if(!element?.neededPaymentId)continue;
    const obj = {
        updateMany:{
            filter:{
                "carrier":"63f93765625de015c40bf697",
                "reference_number":{$in:element?.combineInvoice?.referenceNums}
            },
            update: {
                $set:{
                    "paymentHistory.0.Id":element?.neededPaymentId
                }
            }
        }
    }
    bulkWriteArray.push(obj);
}
// Data to be written to the file
const data = JSON.stringify(bulkWriteArray);

// Specify the file path and name
const filePath = 'kimberlyxx.json';

// Write data to the file
fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File has been written successfully!');
  }
});