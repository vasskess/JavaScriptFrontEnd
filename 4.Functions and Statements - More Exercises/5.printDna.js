function printDna(num) {
    const sequence = "ATCGTTAGGG";
    const increment = 1
    let counter = 0;
    let dnaOutput = "";
  
    for (let i = 0; i < num; i++) {
      if (i % 4 === 0) {
        dnaOutput += `**${sequence[counter % 10]}${sequence[(counter % 10) + increment]}**\n`;
      } else if (i % 4 === 1 || i % 4 === 3) {
        dnaOutput += `*${sequence[counter % 10]}${"-".repeat(2)}${sequence[(counter % 10) + increment]}*\n`;
      } else if (i % 4 === 2) {
        dnaOutput += `${sequence[counter % 10]}${"-".repeat(4)}${sequence[(counter % 10) + increment]}\n`;
      }
      counter += 2;
    }
    console.log(dnaOutput);
  }

  
printDna(4);
printDna(10)