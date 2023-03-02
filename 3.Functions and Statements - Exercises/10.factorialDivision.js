// function factorialDivision(num1, num2) {
//     const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1);   //recursive factorial function
//     const result = factorial(num1) / factorial(num2);                      //calculate factorial division
//     console.log(result.toFixed(2));                                        //format result to two decimal places
//     }
// This ^^^ same as the beneath one ! 
function factorialDivision(num1, num2){
    function factorial(n) {
        if (n === 0 || n === 1) {
          return 1;
        } else {
          return n * factorial(n - 1);
        }
      }
    
      let factorial1 = factorial(num1);
      let factorial2 = factorial(num2);
    
      console.log((factorial1 / factorial2).toFixed(2));
    }


factorialDivision(5, 2)
factorialDivision(6, 2)