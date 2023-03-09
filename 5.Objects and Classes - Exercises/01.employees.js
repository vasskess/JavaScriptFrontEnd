// function employees(arr){
//     arr.forEach(element => {
//        console.log(`Name: ${element} -- Personal Number: ${element.length}`)
//     });
// }
function employees(arr) {
  let persons = [];

  arr.forEach((element) => {
    let person = {
      name: element,
      personal_number: element.length,
    };
    persons.push(person);
  });

  persons.forEach((obj) => {
    console.log(`Name: ${obj.name} -- Personal Number: ${obj.personal_number}`);
  });
}

// employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal'])
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
