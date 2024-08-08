const function1 = new Promise((resolve, reject)=>{
    // resolve ([{a:1,}, {a:2,},{a:3,}])
    resolve(null);
})
const finallyTest = function1.then((data)=>{
    const value = data.map(obj=>obj.a);
    console.log(value)
}).catch((error)=>{
    console.log(error)
}).finally((err)=>{
    console.log(err)
})
// console.log(finallyTest);