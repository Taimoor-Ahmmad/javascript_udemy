//Two ways of creating arrays!

// 1.
const friends = ["Ali", "Ahmad", "Aslam"];
console.log(friends);

//2. using new keyword
const years = new Array(1991, 1984, 1987, 1954);
console.log(years[0]);

console.log(friends.length);

// To calculate last element of an array
console.log(friends[friends.length - 1]);

//To change the elements of an array
friends[2] = "John";
console.log(friends);

const firstName = "Johans";
const jonas = [firstName, "Shedmatman", 2037 - 2000, friends, "teacher"];
console.log(jonas);
