function stringSubstring(word, text) {
  let words = text.split(" ");
  let searched = word;
  for (const sWord of words) {
    if (sWord.toLowerCase() === searched.toLowerCase()) {
      console.log(searched);
      return;
    }
  }
  console.log(`${searched} not found!`);
}

stringSubstring(
  "javascript",
  "JavaScript is the best programming language JavaScript"
);
stringSubstring("python", "JavaScript is the best programming language");
