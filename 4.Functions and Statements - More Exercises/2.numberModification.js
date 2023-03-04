function numberModification(number){
    const numToAdd = '9'
    let sum = 0;
    let count = 0;

  for (let digit of number.toString()) {
    sum += parseInt(digit);
    count++;
  }

  while (sum / count < 5) {
    number = parseInt(number.toString() + numToAdd);
    sum += Number(numToAdd);
    count++;
  }

  console.log(number);
}

numberModification(101)
numberModification(5853)
numberModification(1111)
