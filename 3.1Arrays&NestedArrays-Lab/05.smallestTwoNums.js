function smallestTwoNums(arr) {
  const [min1, min2] = arr.sort((a, b) => a - b).slice(0, 2);
  console.log(`${min1} ${min2}`);
}

smallestTwoNums([30, 15, 50, 5]);
