//Solution with Array !
function piccolo(arr) {
  let carNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    let [direction, carNumber] = arr[i].split(", ");

    if (direction === "IN") {
      if (!carNumbers.includes(carNumber)) {
        carNumbers.push(carNumber);
      }
    } else {
      let index = carNumbers.indexOf(carNumber);
      if (index !== -1) {
        carNumbers.splice(index, 1);
      }
    }
  }

  if (carNumbers.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    carNumbers.sort((a, b) => a.localeCompare(b, { numeric: true }));
    console.log(carNumbers.join("\n"));
  }
}

// Solution with Set()
//
// function piccolo(arr) {
//   let carNumbers = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     let [direction, carNumber] = arr[i].split(", ");

//     if (direction === "IN") {
//       carNumbers.add(carNumber);
//     } else {
//       carNumbers.delete(carNumber);
//     }
//   }

//   if (carNumbers.size === 0) {
//     console.log("Parking Lot is Empty");
//   } else {
//     let sortedCarNumbers = Array.from(carNumbers).sort((a, b) =>
//       a.localeCompare(b, { numeric: true })
//     );
//     console.log(sortedCarNumbers.join("\n"));
//   }
// }

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
