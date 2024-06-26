//Function expression and declaration

//Function Declaration

/*Difference here is that we can use it call function
 even before declaration but not in the function expression*/
const age = calcAge(2000);
console.log(age);

function calcAge(birthyear) {
  return 2037 - birthyear;
}

//Function expression--->expression always yields a result

const current_age = function (birthyear) {
  return 2037 - birthyear;
};

console.log(current_age(2000));

//Anonymous function
const current_age_new = (birthyear) => {
  return 2037 - birthyear;
};

console.log(current_age_new(2000));

//function expressions are mostly recommended
