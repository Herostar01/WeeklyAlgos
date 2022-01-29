// Bubble Sort Array

arr = [5, 3, 4, 2, 1]

//if index 0 is less than the next index, we move it one place 
// to the right and so on until the array is sorted

// start with first index on every iteration

const num1 = [5, 3, 4, 2, 1];

const num2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

const num3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(arr){
    for (let y = 0; y < arr.length; y++) {

        for (var x = 0; x < (arr.length - y - 1); x++){

        if (arr[x] > arr[x+1]) {
            var temp = arr[x]
            arr[x] = arr[x+1]
            arr[x+1] = temp 
            
        }
    }
}

    console.log(arr)

}

bubbleSort(num1);

bubbleSort(num2);