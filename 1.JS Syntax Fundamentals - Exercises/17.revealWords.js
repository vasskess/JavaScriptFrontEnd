function solve(searchedWords, text) {
  let myWords = searchedWords.split(", ");
  let mySentence = text.split(" ");

  for (let i = 0; i < mySentence.length; i++) {
    const textWord = mySentence[i];
    for (const word of myWords) {
      if (
        mySentence[i].includes("*".repeat(word.length)) &&
        mySentence[i].length === word.length
      ) {
        mySentence[i] = word;
      }
    }
  }
  console.log(mySentence.join(" "));
}

// This is a function that takes two parameters - searchedWords and text.
// It first splits the searchedWords and text into arrays of words using the split() method with the delimiter ", " and " " respectively.
// Then it loops through each word in text using a for loop, and for each word, it checks if it contains a template character "*" using the includes() method with the repeat() method to create a string of the same length as the word in searchedWords. It also checks if the length of the word in text is the same as the length of the word in searchedWords.
// If both conditions are true, it replaces the word in text with the corresponding word from searchedWords.
// Finally, it joins the modified text array into a string using the join() method with the delimiter " " and logs the result to the console.

solve("great", "softuni is ***** place for learning new programming languages");
