function sumDigits(number) {
  let sum = 0;
  let numString = number.toString();

  for (let i = 0; i < numString.length; i++) {
    sum += Number(numString.charAt(i));
  }

  return sum;
}

console.log(sumDigits(245678));
