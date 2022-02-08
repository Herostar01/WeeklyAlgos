// Quick sort

function kwik_sort(InputArr) {
    if (InputArr.length <= 1) {
        return InputArr;
    } 
    else {
        let left = [];
        let right = [];
        let newArray = [];
        let pivot = InputArr.pop();
        let length = InputArr.length;

        for (var i = 0; i < length; i++) {
            if (InputArr[i] <= pivot) {
                left.push(InputArr[i]);
            }
            else {
                right.push(InputArr[i])
            }
        }

        return newArray.concat(kwik_sort(left), pivot, kwik_sort(right));
    }
}

let unsortArr = [3, 9, 2, 5, -1, 4, 1];

console.log("Original array: " + unsortArr);

let sortedArr = kwik_sort(unsortArr);

console.log("Sorted array: " + sortedArr);

