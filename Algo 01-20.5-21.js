// function maxSumofK(arr, k) {
//     let max = 0;
//     let sum = 0;
//     //find initial sum of first k elements
//     for(let n = 0; n <  k ; n++) {
//         sum +=  arr[n];      
//     }
//     //iterate the array once and increment the right edge
//      for(let i = k; i < arr.length; i++) {    
//             sum += arr[i] - arr[i-k];
//             //compare if sum is more than max, if yes then replace max with new sum value
//                if(sum > max) {
//                    max = sum;
//                }
//             }
//         return max;
//     }
    
//     let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20 ];
//     console.log(maxSumofK(arr, 4))
//     //output 28

//     console.log(maxSumofK([5, 4, 3, 2, 1], 3));
// // 12

function maxSumofK(arr, k) {
    let sum = 0;
    //find initial sum of first k elements
    for(let n = 0; n <  k ; n++) {
        sum +=  arr[n];      
    }
    let max = sum;
    //iterate the array once and increment the right edge
     for(let i = k; i < arr.length; i++) {
            sum += arr[i] - arr[i - k];
            //compare if sum is more than max, if yes then replace max with new sum value
               if(sum > max) {
                   max = sum;
               }
            }
        return max; 
    }
    // 18
    let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20 ];
    console.log(maxSumofK(arr, 4))
    //output 24
    
    console.log(maxSumofK([1, 2, 3, 4, 5, 6], 3));
    // 15
    console.log(maxSumofK([43, -11, 23, 27, 0, 8], 3));
    // 50
    console.log(maxSumofK([5, 4, 3, 2, 1], 2));

// For Muhammad
function brute(arr) {
    let max = 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = arr[i] + arr[i + 1] + arr[i + 2];
        console.log(sum);
        if(sum > max) max = sum;
    }
    return max;
}

