//Spread Operator--->basically gets all of the elements out of the array and wrote it manually

//Use case of spread operator
/*when we want to use all the elements of the array into the function arguments,
we can use spread operator*/
const arr1 = [1, 2, 3, 4, 5];
console.log(arr); //-->1 element which is an array
console.log(...arr1); //--->all of the elements

//Object for example
const resturant = {
  name: "Classico Italino",
  location: "Los Angales",
  categories: ["Italian", "Pizzario", "Vegetarian", "Organic"],
  starterMenu: ["Mocha", "Latte", "Garlic Bread"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (MainIndex, StarterIndex) {
    return [this.mainMenu[MainIndex], this.StarterMenu[StarterIndex]];
  },
  openingHours: {
    thus: {
      open: 12,
      close: 1,
    },
    friday: {
      open: 4,
      close: 8,
    },
    monday: {
      open: 12,
      close: 1,
    },
    Tuesday: {
      open: 4,
      close: 8,
    },
  },
  //destructuring below object
  orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]},and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//for adding elements in an array
const arr = [1, 7, 9];
const badarray = [0, arr[0], arr[1], arr[2]];
console.log(badarray);

//using spread Operator
const newArr = [0, ...arr];
console.log(newArr);
//below both functions are same
console.log(...newArr);
console.log(0, 1, 7, 9);

/*Creating new Array by expanding old array with new element
We are not maipulating resturant.main menu here instead 
we are creating new Array*/
const newMenu = [...resturant.mainMenu, "Gnocci"];
console.log(newMenu);

//Two use cases of spread operator

//1.Copy array
const mainMenu = [...resturant.mainMenu];

//2.Merge two arrays
const menu = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(menu);

//Most of the javascript operators are iterables except objects
//We can use spread operator on strings as well
const str = "Jona";
const letter = [...str, " ", "s ."];
console.log(letter);
console.log(...str);
