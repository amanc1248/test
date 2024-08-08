// // 1. asynchronous javascripts
// // 1.1. using call back
// function myFunction(callback){
//     setTimeout(()=>{
//         const data = {name: "aman", age: 21}
//         callback(data);
//     }, 3000)
// };
// myFunction((data)=>console.log(`Data: `, data));

const { reject } = require("lodash");

// // 1.2. using promises
// function myData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const data = {name: "Rohit", age: 23};
//             resolve(data);
//         }, 3000)
//     })
// }
// myData().then((response)=>{
//     console.log("Data: ",response);
// }).catch(error=>{
//     console.log("Error: ", error);
// })

// 1.3. async/await
// async function myFunction1(){
//     let data = "Hello world!";
//     return data;
// }
// myFunction1().then(response=>console.log(response));

// const myFunction2 = async()=>{
//     let data = await "123";
//     console.log(data);
// }

// console.log(1)
// myFunction2();
// console.log(2);

// function asynchronous_operational_method(){
//     let firstPromise = new Promise((resolve,reject)=>resolve("Hello world!!"));
//     let secondPromise = new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("Geeks for geeks!"),5000);
//     });
//     let combinedPromise = Promise.all([firstPromise,secondPromise]);
//     return combinedPromise;
// };
// async function display(){
//     let data = await asynchronous_operational_method();
//     console.log(data);
// }
// display();

// event emitter
const EventEmitter = require("events");
const emitter = new EventEmitter();

// register an event
emitter.on("messageLogged",()=>{
    console.log("Listner called...");
})

// raise an event
emitter.emit("messageLogged");