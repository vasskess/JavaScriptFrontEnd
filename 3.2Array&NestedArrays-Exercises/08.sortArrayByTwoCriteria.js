function sortArrByTwoCriteria(arr) {
  arr.sort((a, b) => {
    if (a.length === b.length) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }
    return a.length - b.length;
  });
  arr.forEach((str) => console.log(str));
}

sortArrByTwoCriteria(["alpha", "beta", "gamma"]);
sortArrByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortArrByTwoCriteria(["test", "Deny", "omen", "Default"]);
