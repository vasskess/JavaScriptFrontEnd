// function rotateArray(arr, counter) {
//   for (let i = 0; i < counter; i++) {
//     arr.unshift(arr.pop());
//   }
//   console.log(...arr);
// }
function rotateArray(arr, counter) {
  for (let i = 0; i < counter % arr.length; i++) {
    arr.unshift(arr.pop());
  }
  console.log(...arr);
}

rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
