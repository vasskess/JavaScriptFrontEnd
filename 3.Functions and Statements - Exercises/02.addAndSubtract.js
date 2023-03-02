function addAndSubtract(num1, num2, num3) {
  return add() - num3;

  function add() {
    return num1 + num2;
  }
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));
