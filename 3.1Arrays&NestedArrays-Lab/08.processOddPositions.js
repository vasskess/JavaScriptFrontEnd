// function processOddPosition(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//       result.push(arr[i] * 2);
//     }
//   }
//   return result.reverse().join(" ");
// }

function processOddPosition(arr) {
  const result = arr
    .filter((_, b) => b % 2 !== 0)
    .map((a) => a * 2)
    .reverse();
  return result.join(" ");
}

console.log(processOddPosition([10, 15, 20, 25]));
