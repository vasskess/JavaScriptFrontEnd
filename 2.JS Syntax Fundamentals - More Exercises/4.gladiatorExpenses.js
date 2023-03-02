// function gladiatorExpenses(
//   lostFights,
//   helmetPrice,
//   swordPrice,
//   shieldPrice,
//   armorPrice
// ) {
//   expenses = {
//     countHelmet: 0,
//     countSword: 0,
//     countShield: 0,
//     countArmor: 0,
//   };
//   expenses.countHelmet = Math.floor(lostFights / 2);
//   expenses.countSword = Math.floor(lostFights / 3);
//   expenses.countShield = Math.floor(
//     Math.min(expenses.countHelmet, expenses.countSword) / 2
//   );
//   expenses.countArmor = Math.floor(expenses.countShield / 2);

//   let total =
//     expenses.countHelmet * helmetPrice +
//     expenses.countSword * swordPrice +
//     expenses.countShield * shieldPrice +
//     expenses.countArmor * armorPrice;
//   console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
// }
function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  const helmetsBroken = Math.floor(lostFights / 2);
  const swordsBroken = Math.floor(lostFights / 3);
  const shieldsBroken = Math.floor(Math.min(helmetsBroken, swordsBroken) / 2);
  const armorsBroken = Math.floor(shieldsBroken / 2);

  const total =
    helmetsBroken * helmetPrice +
    swordsBroken * swordPrice +
    shieldsBroken * shieldPrice +
    armorsBroken * armorPrice;

  console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
