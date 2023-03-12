// function extractSubstrFromArr(arr) {
//   let curr = arr.shift();
//   let myArr = [curr];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element >= curr) {
//       myArr.push(element);
//       curr = element;
//     }
//   }
//   return myArr;
// }
function extractSubstrFromArr(arr) {
  let curr = arr.shift();
  return arr.reduce(
    (acc, element) => {
      if (element >= curr) {
        acc.push(element);
        curr = element;
      }
      return acc;
    },
    [curr]
  );
}

console.log(extractSubstrFromArr([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractSubstrFromArr([1, 2, 3, 4]));
console.log(extractSubstrFromArr([20, 3, 2, 15, 6, 1]));
