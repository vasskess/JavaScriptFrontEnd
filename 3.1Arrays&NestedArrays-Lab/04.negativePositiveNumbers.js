function negPosNums(arr) {
  result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < 0) {
  //       result.unshift(arr[i]);
  //     } else {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  // both are doing the same !

  arr.forEach((element) => {
    if (element < 0) {
      result.unshift(element);
    } else {
      result.push(element);
    }
  });
  return result;
}

// console.log([-7, 2, 8, 9])
console.log(negPosNums([3, -2, 0, -1]));
