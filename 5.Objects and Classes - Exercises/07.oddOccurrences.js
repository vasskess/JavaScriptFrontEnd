function oddOccurrences(input) {
  const arr = input.toLowerCase().split(" ");
  let myObj = {};
  arr.forEach((element) => {
    if (!myObj.hasOwnProperty(element)) {
      myObj[element] = 1;
    } else {
      myObj[element]++;
    }
  });
  let result = [];
  for (let key in myObj) {
    if (myObj[key] % 2 !== 0) {
      result.push(key);
    }
  }
  
  console.log(result.join(" "));
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
