function fruits(fruit, grams, price) {
  let kilos = grams / 1000;
  let result = (grams / 1000) * price;
  console.log(
    `I need $${result.toFixed(2)} to buy ${kilos.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

fruits("orange", 2500, 1.8);
fruits("apple", 1563, 2.35);
