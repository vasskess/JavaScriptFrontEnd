function solve(arr) {
  const evenlements = arr.filter((_, index) => index % 2 === 0);
  console.log(evenlements.join(" "));
}

solve(["20", "30", "40", "50", "60"]);
