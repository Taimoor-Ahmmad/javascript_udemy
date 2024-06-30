function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCal) {
  sumCal(a, b);
}
calculator(1, 2, sum);

//Callback hell
//Nested callbacks stacked one after another doomed together--->pyrmid of doom
