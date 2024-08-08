const p1 = Promise.resolve("Error From Promise One");
const p2 = Promise.resolve(200);
const p3 = Promise.resolve("Finished");

Promise.all([p1, p2, p3])
  .then((messages) => console.log(messages))
  .catch((error) => console.log(error));

const p11 = Promise.reject("Error From Promise One");
const p22 = Promise.resolve(200);
const p33 = Promise.resolve("Finished");

Promise.allSettled([p11, p22, p33]).then((response) => {
  console.log(response);
});

function stepOne(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, 3000);
  });
}

function stepTwo(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, 2000);
  });
}

function stepThree(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, 1000);
  });
}
function stepFour(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(value);
        resolve(value);
      }, 3000);
    });
  }

// Run the functions sequentially with Promises
Promise.all([stepOne(1), stepTwo(2), stepThree(3),stepFour(4)]).then((response) => {
  console.log(response);
});

console.log("Hello after promise all")