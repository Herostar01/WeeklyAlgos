// function twoLetters(arr, sum) {
//     // code
//     for (let x = 0; x < arr.length; x++) {
//         for (let y = x + 1; y < arr.length; y++) {

//             if (test === sum) {
//                 console.log(sum);
//                 return [x, y];
//             }
//             }
//     }
// }

//     console.log(twoLetters(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'fg'));
// // [5, 6]


let jackass = [3, 6, 12, 86, 33, 2, 7, 11, 4];

function twoPointer(arr, sum) {
    // code
    arr = arr.sort((a, b) => a - b);
    console.log(arr);
    for (let x = 0; y = arr.length - 1; x < y) {
        let test = (arr[x] + arr[y]);
        if (test === sum) {
            console.log(test);
            return "hello";
        }
        else if (test < sum) {
            x++;
        }
        else y--;

    }
}

console.log(twoPointer(jackass, 9));
// '2 and 7' 