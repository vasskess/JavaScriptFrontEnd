function myMatrix(number) {
  for (let i = 0; i < number; i++) {
    let row = '';
    for (let j = 0; j < number; j++) {
      row += number + ' ';
    }
    console.log(row);
  }
}

myMatrix(3)
myMatrix(7)
myMatrix(2)