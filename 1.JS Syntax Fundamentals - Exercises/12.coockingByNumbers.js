function coockingByNumbers(number, ...commands) {
  let num = Number(number);

  commands.forEach((element) => {
    switch (element) {
      case "chop":
        num /= 2;
        console.log(num);
        break;
      case "dice":
        num = Math.sqrt(num);
        console.log(num);
        break;
      case "spice":
        num += 1;
        console.log(num);
        break;
      case "bake":
        num *= 3;
        console.log(num);
        break;
      case "fillet":
        num *= 0.8;
        console.log(num);
        break;
    }
  });
}

// coockingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
coockingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
