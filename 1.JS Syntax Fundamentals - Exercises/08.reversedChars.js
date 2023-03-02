function reversedChars(char1, char2, char3) {
  let result = `${char1}${char2}${char3}`;
  console.log(result.split("").reverse().join(" "));
}

reversedChars("A", "B", "C");
