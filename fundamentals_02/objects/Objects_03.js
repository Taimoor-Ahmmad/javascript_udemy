//Object methods
//Functions are another type of value which means we can create key value pairs--->we can add functions to the objects
const Taimoor = {
  firstName: "Taimoor",
  lastName: "Ahmmad",
  birthYear: 2000,
  age: 23,
  role: "employee",
  friends: ["Shane", "Usman", "Kamran"],
  hasDriverLiscence: true,
  calcAge: function () {
    return 2024 - this.birthYear;
  },
};

// //calcAge-->Method--->Any function that is attached to the object is called method
// const calcAge = function (birthYear) {
//   return 2000 - birthYear;
// };

//Accessing calcAge method
console.log(Taimoor.calcAge());
console.log(Taimoor["calcAge"]());

//this key word is used to point the current object we don't need to change it in all the places
