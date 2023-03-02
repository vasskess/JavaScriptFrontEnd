function calculate(num1, operand, num2) {
  const result = eval(`${num1} ${operand} ${num2}`).toFixed(2);
  console.log(result);
}

calculate(5, "+", 10);
calculate(25.5, "-", 3);
