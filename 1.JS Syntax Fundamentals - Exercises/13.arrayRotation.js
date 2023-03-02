function rotateArray(arr, numRotations) {
  numRotations %= arr.length;

  sliced = arr.slice(numRotations).concat(arr.slice(0, numRotations));
  console.log(sliced.join(" "));
}

rotateArray([51, 47, 32, 61, 21], 2);
