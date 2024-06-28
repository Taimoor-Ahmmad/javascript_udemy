//ES6 introduced new way of adding object literals in the existing object
const openingHours = {
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
};
//To add above object we can use simple object name in the below object literal
const resturant = {
  name: "Classico Italino",
  location: "Los Angales",
  categories: ["Italian", "Pizzario", "Vegetarian", "Organic"],
  starterMenu: ["Mocha", "Latte", "Garlic Bread"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (MainIndex, StarterIndex) {
    return [this.mainMenu[MainIndex], this.StarterMenu[StarterIndex]];
  },
  //ES6 enhanced object literal
  openingHours,
  //below functions are same
  orderingPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  //ES6 enhanced function syntax
  orderingPizza1(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
