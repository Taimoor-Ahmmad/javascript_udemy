let rep = 1;
while (rep <= 10) {
  console.log(`While lifting weight repititions ${rep}`);
  rep++;
}

//Another example
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a dice ${dice} Times`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end");
  }
}
