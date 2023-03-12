// function addAndRemove(arr) {
//   let myArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element === "add") {
//       myArr.push(i + 1);
//     } else {
//       myArr.pop(element[i]);
//     }
//   }
//   console.log(myArr.length > 0 ? myArr.join("\n") : "Empty");
//   if (myArr.length > 0) {
//     console.log(myArr.join("\n"));
//   } else {
//     console.log("Empty");
//   }
// }

function addAndRemove(arr) {
  let myArr = [];
  arr.forEach((command, i) => {
    command === "add" ? myArr.push(i + 1) : myArr.pop();
  });
  console.log(myArr.length ? myArr.join("\n") : "Empty");
}

addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
