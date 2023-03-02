function everyNthElement(array, step) {
  const myArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % step === 0) {
      myArray.push(array[i]);
    }
  }
  return myArray;
}

console.log(everyNthElement(["5", "20", "31", "4", "20"], 2));
console.log(everyNthElement(["dsa", "asd", "test", "tset"], 2));
console.log(everyNthElement(["1", "2", "3", "4", "5"], 6));
