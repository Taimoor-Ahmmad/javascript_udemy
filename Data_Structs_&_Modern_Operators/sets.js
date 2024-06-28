//A set is a collection of unique values
const ordersSet = new Set(["pasta", "pizza", "rositto", "pasta", "pizza"]);
console.log(ordersSet);

console.log(new Set("Johans"));
console.log(ordersSet.has("pizza"));
console.log(ordersSet.has("rositto"));

console.log(ordersSet.add("Garlic Bread"));
//Example

const staff = ["Waiter", "Cheff", "Waiter", "Manager", "cheff"];
const staffSet = new Set(staff);
console.log(staffSet);

//Better way
const staffSet1 = [...new Set(staff)];
console.log(staffSet1);

//For finding unique entries in strings
console.log(new Set("Joanasssnnnannns").size);
