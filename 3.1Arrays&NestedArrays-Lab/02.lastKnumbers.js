function lastKnums(n, k) {
  const myArr = [1];
  for (let i = 1; i < n; i++) {
    const startIndex = Math.max(0, i - k);
    const endIndex = i;
    const previousElements = myArr.slice(startIndex, endIndex);
    const sum = previousElements.reduce((a, b) => a + b);
    myArr.push(sum);
  }
  return myArr;
}

console.log(lastKnums(6, 3));
console.log(lastKnums(8, 2));
