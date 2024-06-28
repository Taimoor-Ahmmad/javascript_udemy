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

//Without Optional Chaining
if (resturant.openingHours && resturant.openingHours.monday) {
  console.log("object");
}
//With Optional chaining
console.log(resturant.openingHours.mon?.open);
//For checking one or more properties
console.log(resturant.openingHours?.monday?.open);
