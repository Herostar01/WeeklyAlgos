function facts(nums){ //6
    if (nums === 1){
      return 1;
    }
    else {
      return nums * facts(nums -1);
    }
  
  
  }
  
  console.log(facts(6));

  // When given a number, return that fibonacci number in the series.

// fib 2 but has to return 1
function fibonacci(num) {
    if(num < 2) {
      return num; 
    }
    else {
      return fibonacci(num - 1) + fibonacci(num - 2);
      /*
      fibonacci(5)
      3 + 2
      
      go backwards: 1 + 
      */
    }
  }
  
  console.log(fibonacci(2));
  // 1
  console.log(fibonacci(5));
  // 5
  console.log(fibonacci(-1));
  // ???
  
  // Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, 34
  
  // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610

// Return the factorial of a given number using recursion (e.g. 3! = 3 * 2 * 1 = 6).

function factorial(num) {

    // Removes the edge case of a negative number.
    if(num < 0) return -1;
  
    // Break case to avoid infinite recursion.
    else if(num === 0) return 1;
  
    // Returns the final answer by calling on the function recursively.
    else return num * factorial(num - 1);
    /*
    factorial(3) returns 3 * factorial(2);
    factorial(2) returns 2 * factorial(1);
    factorial(1) returns 1 * factorial(0);
    factorial(0) hits the break case, and returns 1;
    So factorial(3) = 3 * 2 * 1 * 1 = 6;
    */
  }
  
  console.log(factorial(3));
  // 6
  console.log(factorial(5));
  // 120
  console.log(factorial(0));
  // 1
  console.log(factorial(-1));
  // -1
  
  // When given a number, return that fibonacci number in the series.
  
  function fibonacci(num) {
    // code
  }
  
  console.log(fibonacci(5));
  // 5
  console.log(fibonacci(-1));
  // -1


// Find the largest sum of three consecutive numbers in an array.

const arr = [1, 2, 3, 4, 5, 6];
// 15

function sumThree(arr) {
  let result = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      for(let k = j + 1; k < arr.length; k++) {
        if(arr[i] + arr[j] + arr[k] > result) result = arr[i] + arr[j] + arr[k];
      }
    }
  }
  return result;
}