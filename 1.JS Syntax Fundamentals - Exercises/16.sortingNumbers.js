// function sortAlternate(arr) {
//   arr.sort((a, b) => a - b);
//   const result = [];
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     if (left === right) {
//       result.push(arr[left]);
//     } else {
//       result.push(arr[left], arr[right]);
//     }
//     left++;
//     right--;
//   }
//   return result;
// }

function solve(numArr) {
  let sortedArr = numArr.sort((a, b) => a - b);
  let newArr = [];
  while (sortedArr.length > 0) {
    newArr.push(sortedArr.shift());
    newArr.push(sortedArr.pop());
  }
  return newArr;
}

//,shift() == .popleft()

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// console.log(sortAlternate([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
