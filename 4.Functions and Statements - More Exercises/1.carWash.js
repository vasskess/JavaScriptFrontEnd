function carWash(params){
    let total = 0
 
    while (params.length > 0){
     let command = params.shift()  
     if (command === 'soap') {
        total += 10;
      } else if (command === 'water') {
        total *= 1.2;
      } else if (command === 'vacuum cleaner') {
        total *= 1.25;
      } else if (command === 'mud') {
        total -= (total * 0.10);
      }
    }
  
    console.log(`The car is ${total.toFixed(2)}% clean.`);
 }
 


carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);