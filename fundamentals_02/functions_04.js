//Functions calling other functions

//Analogy of a machine fruit processor and fruit cutter into smaller parts

const fruitCutter = (fruit) => {
  return fruit * 4;
};

const fruitJuicer = (apple, orange) => {
  const applePieces = fruitCutter(apple);
  const orangePieces = fruitCutter(orange);

  const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces was 
    very tasty`;

  return juice;
};

const result = fruitJuicer(2, 3);
console.log(result);
