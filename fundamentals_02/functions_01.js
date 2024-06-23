"use strict";

//A variable holds a value but a function holds a complete line of code
function logger() {
  console.log("Hello i am a function!");
}

// calling|invoking|runnning
logger();
logger();
logger();

//Function with parameters
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges is very tasty!`;
  return juice;
}
const fruitsJuice = fruitProcessor(5, 4);
console.log(fruitsJuice);

console.log(fruitProcessor(2, 3));
