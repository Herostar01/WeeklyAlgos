function twoNumberSum(array, targetSum) {
    // Write your code here.
    let newArr = [];
    for ( var t=0; t < array.length; t++){
      if ( (array[t] + array[t+1]) === targetSum) {
        console.log(array[t],array[t+1])
        newArr = [array[t], array[t+1]]
      }
    }
    return console.log(newArr);
  }

twoNumberSum([1,2,3,4,5,6,7], 11)