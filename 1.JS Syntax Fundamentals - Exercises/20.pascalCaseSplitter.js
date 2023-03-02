function splitPascalCaseString(str) {
  let words = str.split(/(?=[A-Z])/).map((word) => word);
  console.log(words.join(", "));
}

splitPascalCaseString("SplitMeIfYouCanHaHaYouCantOrYouCan");
splitPascalCaseString("iSii");
splitPascalCaseString("S_s");
