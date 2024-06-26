"use strict";

const array = [1, 2, 3];

const a = array[0];
const b = array[1];
const c = array[2];

const [x, y, z] = array;
console.log(array);
console.log(x, y, z);

//Resturant
const resturant = {
  name: "Classico Italino",
  location: "Los Angales",
  categories: ["Italian", "Pizzario", "Vegetarian", "Organic"],
  StarterMenu: ["Mocha", "Latte", "Garlic Bread"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (MainIndex, StarterIndex) {
    return [this.mainMenu[MainIndex], this.StarterMenu[StarterIndex]];
  },
};

let [main, , secondary] = resturant.categories; //middle will be ignored
console.log(main, secondary);

//Swapping main and secondary without destructuring
let temp = main;
main = secondary;
secondary = temp;

console.log(main, secondary);

//using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//To return multiple values from a function
const [starterValue, mainValue] = resturant.order(2, 1);
console.log(starterValue, mainValue);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//another example
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
