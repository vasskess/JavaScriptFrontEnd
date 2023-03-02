function bitcoinMining(goldPerDay) {
  const goldPrice = 67.51;
  const bitcoinPrice = 11949.16;
  let firstPurchase = 0;
  let money = 0;
  let bitcoins = 0;
  for (let i = 0; i < goldPerDay.length; i++) {
    if ((i + 1) % 3 === 0) {
      money += goldPerDay[i] * 0.7 * goldPrice;
    } else {
      money += goldPerDay[i] * goldPrice;
    }
    while (money >= bitcoinPrice) {
      bitcoins += 1;
      money -= bitcoinPrice;
      if (firstPurchase == 0) {
        firstPurchase += i + 1;
      }
    }
  }
  console.log(`Bought bitcoins: ${bitcoins}`);
  if (bitcoins) {
    console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
