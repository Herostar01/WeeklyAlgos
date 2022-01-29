// function sumThree(arr){
//     let sum = 0;
//     let outcome = [];
//     for(let i = 0; i < arr.length; i++){
//       for(let j = i + 1; j < arr.length; j++){
//         let outcome = [];
//         if(arr[i] > arr[j]){
//           outcome.push(arr[i]);
//         }
//         if(arr[i] < arr[j]){
//           outcome.push(arr[j]);
//         }
//         if(outcome.length == 3){
//           for(let k = 0; k < outcome.length; k++){
//             sum += outcome[k];
//           }
//           break;
//         }
//       }
//     }
//     return sum;
//   }

// let sum = [];
//   function sumThree(arr) {
//     // code
//     for (let i = 0; i < arr.length; i++){
      
//       for(let j = i+1; j < arr.length; j++) {

//         for(let k = i+1; k < arr.length; k++) {

//         if (arr[i] < arr[j]){
//           sum.push(arr[j]);
//         }

//         }
//       }
//     }
        
        
//         return sum;
//   }

let sum = [];
function sumThree(arr) {
  // code
  for (let i = 0; i < arr.length; i++){
    
    for(let j = i+1; j < arr.length; j++) {

      for(let k = i+1; k < arr.length; k++) {

      
      if (arr[i] < arr[j]){
        sum.push(arr[j]);
      }
      if (arr[j]< arr[k]){
        sum.push(arr[k]);
      }
      if (arr[k] < arr[j]){
        sum.push(arr[j])
      }

      }
    }
  }
      
      
      return sum;
}
  
  console.log(sumThree([1, 2, 3, 4, 5, 6]));
  // 15
  console.log(sumThree([43, -11, 23, 27, 0, 8]));
  // 50