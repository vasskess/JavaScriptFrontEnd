// function oddAndEvenSum(number) {
//   let evenSum = 0,
//     oddSum = 0;
//   for (let digit of number.toString()) {
//     digit % 2 === 0 ? (evenSum += Number(digit)) : (oddSum += Number(digit));
//   }
//   return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
// }
// ^^^ This is the same as the beneath one ! ^^^

function oddAndEvenSum(number) {
  let evenSum = 0;
  let oddSum = 0;
  let digits = number.toString().split("");
  for (let digit of digits) {
    if (digit % 2 === 0) {
      evenSum += parseInt(digit);
    } else {
      oddSum += parseInt(digit);
    }
  }
  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));
