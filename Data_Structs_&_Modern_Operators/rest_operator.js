//Rest operator is used in the left side of the assignment operator

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
  orderingPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//spread operator
const arr = [1, 2, ...[3, 4]];
//rest operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//Rest operator collects the elements that are unused in the destructuring assignment
//Spread operator unpacks the elements in array while rest operator unpacks the elements of the array

//We can use three dots on both sides of the assignment operator as well
const [pizza, , risotto, ...otherFood] = [
  ...resturant.starterMenu,
  ...resturant.mainMenu,
];

console.log(pizza, risotto, otherFood);
console.log(pizza);
console.log(risotto);
console.log(otherFood);

const { friday, ...weekdays } = resturant.openingHours;
console.log(weekdays);

//Functions with rest parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = numbers + [i];
    console.log(sum);
  }
};

add(2, 3);
add(5, 7, 43, 2);

const x = [23, 5, 7];
add(...x);

//Calling orderingPizza function
resturant.orderingPizza("mushrooms", "onion", "Garlic", "spinach");
