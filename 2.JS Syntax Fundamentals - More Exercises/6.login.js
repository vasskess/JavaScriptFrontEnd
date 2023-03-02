function loginTry(arr) {
  let counter = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] === arr[i].split("").reverse().join("")) {
      console.log(`User ${arr[0]} logged in.`);
      break;
    } else {
      counter++;
      if (counter === 4) {
        console.log(`User ${arr[0]} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    }
  }
}

loginTry(["Acer", "login", "go", "let me in", "recA", "aa"]);
// loginTry(["momo", "omom"]);
// loginTry(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
