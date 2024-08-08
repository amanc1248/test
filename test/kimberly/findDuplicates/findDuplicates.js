const {payments} = require(".ata.js")
const _ = require('lodash')
let dupp = [];
for (const payment of payments) {
    const paymentMade = _.sumBy(payment?.payments, "amount");
    if(paymentMade > payment?.totalInvoicePayment){
        dupp.push(payment?.invoice[0]?.invoiceNumber)
    }
}
console.log(dupp);