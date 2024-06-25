//Dot vs bracket notations
const Taimoor = {
  firstName: "Taimoor",
  lastName: "Ahmmad",
  age: 23,
  role: "employee",
  friends: ["Shane", "Usman", "Kamran"],
};

//The two ways
console.log(Taimoor.role);
console.log(Taimoor["role"]);

//That's the reason why bracket notation does exist---->to put expressions here
const nameKey = "Name";
console.log(Taimoor["first" + nameKey]);
