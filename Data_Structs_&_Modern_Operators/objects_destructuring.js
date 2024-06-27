//Objects can also be destructured

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

resturant.orderDelivery({
  time: "22:30",
  address: "Lahore,Pakistan",
  mainIndex: 2,
  starterIndex: 2,
});

//For destructuring we use curly braces
const { name, openingHours, order } = resturant;
console.log(name, openingHours, order);

//Changing variable names from property names
const {
  name: ResturantName,
  openingHours: hours,
  orders: RestOrders,
} = resturant;

console.log(ResturantName, hours, RestOrders);

//Assigning default value to the the property that does not exist-->menu in this case
const { menu = [], StarterMenu: Starters = [] } = resturant;
console.log(menu, Starters);

//mutating variables(swapping values) while destructuring objects
let a = 33;
let b = 212;
const obj = { a: 23, b: 34, c: 14 };

//{a,b}=obj--->js accepts it as a code block
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  friday: { open, close },
} = openingHours;
console.log(open, close);

//we can also assign names to variables as well
const {
  friday: { open: o, close: c },
} = openingHours;

console.log(o, c);
