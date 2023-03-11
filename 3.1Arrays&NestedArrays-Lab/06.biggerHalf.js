function biggerHalf(arr) {
  const result = arr.sort((a, b) => b - a).slice(0, Math.ceil(arr.length / 2));
  return result.sort((a, b) => a - b);
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6, 1]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
