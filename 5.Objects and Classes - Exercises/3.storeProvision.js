function storeProvision(stockArr, orderedArr) {
  let myStore = {};

  for (let i = 0; i < stockArr.length; i += 2) {
    const product = stockArr[i];
    myStore[product] = Number(stockArr[i + 1]);
  }

  for (let i = 0; i < orderedArr.length; i += 2) {
    const product = orderedArr[i];
    if (!myStore.hasOwnProperty(product)) {
      myStore[product] = 0;
    }

    myStore[product] += Number(orderedArr[i + 1]);
  }

  //   for (const [name, count] of Object.entries(myStore)) {
  // console.log(`${name} -> ${count}`);
  //   }
  // This ^^^ is the same as the beneath one !

  Object.keys(myStore).forEach((name) => {
    console.log(`${name} -> ${myStore[name]}`);
  });
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
