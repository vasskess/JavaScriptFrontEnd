function spiceMustFlow(startingYield) {
  let currentYield = startingYield;
  let days = 0;
  let total = 0;

  while (currentYield >= 100) {
    total += currentYield;
    total -= 26;
    currentYield -= 10;
    days++;
  }

  if (total >= 26) {
    total -= 26;
  } else {
    total = 0;
  }

  console.log(days);
  console.log(total);
}

spiceMustFlow(111);
spiceMustFlow(450);
spiceMustFlow(1);
