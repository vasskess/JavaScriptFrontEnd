function sortingNumbers(arr) {
  let myArr = [];
  const sorted = arr.sort((a, b) => a - b);
  while (sorted.length > 0) {
    myArr.push(sorted.shift());
    myArr.push(sorted.pop());
  }
  return myArr;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
