function modernTimes(text) {
  let myText = text.split(" ");

  for (const word of myText) {
    if (word.startsWith("#") && word.length > 1) {
      let result = word.substring(1);
      if (/^[a-z]+$/i.test(result)) {
        //'i' stands for case insensitivity !
        console.log(result);
      }
    }
  }
}

modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
modernTimes(
  "The symbol # is known #variously in English-speaking #regions as the #Number sign"
);
