//Coding Challenge---->Video solution

const calTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];

console.log(bills, tips);
