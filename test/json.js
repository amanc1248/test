const obj= {
    a:1,
    additionalData: undefined
}
const x = JSON.stringify(obj)
const xb = JSON.parse(x)
console.log(xb);