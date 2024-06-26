//Looping through arrays
const Taimoor = [
  "Taimoor Ahmmad",
  24,
  true,
  "Student",
  ["Usman", "Ali", "Aslam"],
];

const types = [];
for (let i = 0; i < Taimoor.length; i++) {
  console.log(Taimoor[i]);

  // types[i] = typeof Taimoor[i];
  //another method of adding elements in arrays
  types.push(typeof Taimoor[i]);
}

console.log(types);

//array of birthYears
const years = [2000, "1999", 1921, 1947];
const ages = [];
//Finding ages
for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(ages);

//Continue and Break
console.log("-----Only Strings-----");
for (let i = 0; i < Taimoor.length; i++) {
  if (typeof (Taimoor[i] !== "string")) continue;
  console.log(Taimoor[i]);
}
