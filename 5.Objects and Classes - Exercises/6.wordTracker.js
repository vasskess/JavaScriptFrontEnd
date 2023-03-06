function wordTraker(arr) {
  let myObj = [];
  const searchedWords = arr.slice(0, 1)[0];
  const words = searchedWords.split(" ");
  for (const word of words) {
    let searched = {
      name: word,
      count: 0,
    };
    myObj.push(searched);
  }
  for (const item of myObj) {
    for (let i = 1; i < arr.length; i++) {
      const sentenceWords = arr[i].split(" ");
      if (sentenceWords.includes(item.name)) {
        item.count++;
      }
    }
  }
  const sortedWords = myObj.sort((a, b) => b.count - a.count);
  for (const word of sortedWords) {
    console.log(`${word.name} - ${word.count}`);
  }
}


wordTraker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
wordTraker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
