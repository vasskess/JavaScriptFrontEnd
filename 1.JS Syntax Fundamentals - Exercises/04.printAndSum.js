function printAndSum(num1, num2) {
  let sum = 0;
  let output = "";
  for (let i = num1; i <= num2; i++) {
    output += i + " ";
    sum += i;
  }
  output += "\n" + "Sum: " + sum;
  console.log(output);
}
