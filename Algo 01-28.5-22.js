function fibonacci(num) {
    if(num < 2) return num;
    else return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
  console.log(fibonacci(5));
  // 5
  console.log(fibonacci(-1));
  // -1
  console.log(fibonacci(11));

  // Dynamic Programming 

  // Redo the recursive fibonacci function, but in O(n)time by including memoization.

function fib(num) {

    // Memoization is the storing of previous of values in an array, rather than recalculating each value recursively.
    let arr = [];
  
    // Notice how we replace the break case by adding values to the array. For example, the 0th fibonacci number is always 0.
    arr[0] = 0;
    arr[1] = 1;
  
    // Although we can also add in the other fibonacci numbers by hand, it is easier to create a for loop that adds the values for us in case we want to calculate a really high fibonacci number.
    for(let i = 2; i <= num; i++) {
  
      // Instead of calling the function recursively, we say that our current position in the array should be the value of the last two positions added together.
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  
    // Then we return the value we want by targetting its position in the array we created. We could also return the entire array up to that number.
    return arr[num];
  }
  
  // See what the time difference is between the recursive version and this version.
  console.log(fib(400));
  // 2.2223224462942035e+62