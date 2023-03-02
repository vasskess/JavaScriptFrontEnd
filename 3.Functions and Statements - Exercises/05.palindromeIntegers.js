function palindromeIntegers(params) {
  for (const num of params) {
    console.log(num.toString() === num.toString().split("").reverse().join(""));
  }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);
