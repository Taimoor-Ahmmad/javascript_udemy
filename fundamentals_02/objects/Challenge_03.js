//Challenge 03

const MarkObject = {
  fullName: "MarkMiller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const JohnObject = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

MarkObject.calcBMI();
console.log(MarkObject.BMI);

JohnObject.calcBMI();
console.log(JohnObject.BMI);

if (JohnObject.BMI > MarkObject.BMI) {
  console.log(`${JohnObject.fullName}'s BMI is greater than
                      ${MarkObject.fullName}'s BMI`);
} else {
  console.log(` ${MarkObject.fullName}'s BMI is greater than
                      ${JohnObject.fullName}'s BMI`);
}
