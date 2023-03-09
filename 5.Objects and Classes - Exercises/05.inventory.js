function inventory(arr) {
  let heroes = [];
  for (const heroData of arr) {
    const name = heroData.split(" / ")[0];
    const level = heroData.split(" / ")[1];
    const items = heroData.split(" / ")[2];
    if (name && level && items.length > 0) {
      let hero = {
        name,
        level: Number(level),
        items: items,
      };
      heroes.push(hero);
    }
  }

  const sortedHeroes = Object.values(heroes).sort((a, b) => a.level - b.level);

  for (const hero of sortedHeroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    if (hero.items) {
      console.log(`items => ${hero.items}`);
    }
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
// inventory([
//   "Batman / 12 / Banana, Gun",
//   "Superman / 111 / Sword",
//   "Poppy / 28 / Sentinel, Antara",
// ]);
