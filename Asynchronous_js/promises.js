/*  Solution of callback hell
    Eventual completion or rejection of a task
    Objects in javascript
    
    API returns data in the form of promises    
    
*/

//resolve and reject are also both the callback functions
let promise_1 = new Promise((resolve, reject) => {
  console.log("I am a promise");
});

/*Promise has three things --->
1. State
2. Prototype
3. Result*/

/* States:

States are of three types
1. fulfilled->completed
2. pending--->undefined
3. rejected-->error occured

*/

let promise_resolve = new Promise((resolve, reject) => {
  console.log("I am a promise");
  resolve(123);
});

//Reject promise
let promise_reject = new Promise((resolve, reject) => {
  console.log("I am a promise");
  reject("SOme error");
});

//Use case of promises

function getData(dataID, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataID);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

//How to use promises

/*
if promise fulfilled--->.then()
if promise rejected---->.catch()
*/

//We have a function and this function is returning a promise
const newPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("error occured");
  });
};
//We are using promise here if resolved
let promise = newPromise();
promise.then(() => {
  console.log("Promise fulfilled");
});
promise.catch("Error occured");
