//Basic Array operations

const friends = ["Ali", "Aslam", "Sarmad"];
friends.push("Taimoor");

console.log(friends);

//To the start of the array
friends.unshift("Kamran");
console.log(friends);

//from the last
const popped = friends.pop();
console.log(popped);
console.log(friends);

//Position of the element in the array
console.log(friends.indexOf("Taimoor"));

//boolean if element is in the array
console.log(friends.includes("Taimoor"));
console.log(friends);
