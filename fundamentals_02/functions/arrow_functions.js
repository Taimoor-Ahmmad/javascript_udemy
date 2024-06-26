//function expression--->explicit return type
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

//Arrow functions------->implicit return type for single line of code
const calcAge2 = (birthYear) => 2037 - birthYear;
const age = calcAge2(1991);
console.log(age);

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

const result = yearsUntilRetirement(1991);
console.log(result);
