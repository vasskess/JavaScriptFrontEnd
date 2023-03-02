function wordsUppercase(text) {
  let myText = text.toUpperCase().match(/\w+/g).join(", ");

  console.log(myText);
}

wordsUppercase("Hi, how are you?");
wordsUppercase("hello hi's");
