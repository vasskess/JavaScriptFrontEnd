function sameNumbers(num) {
  const numStr = num.toString();
  const firstDigit = numStr[0];
  let sameDigits = true;
  let sumDigits = 0;

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !== firstDigit) {
      sameDigits = false;
    }
    sumDigits += Number(numStr[i]);
  }

  console.log(sameDigits);
  console.log(sumDigits);
}

sameNumbers(0111);
console.log(0111);
