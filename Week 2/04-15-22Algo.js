// Bubble Sort Algo

function bubbleSort(arr){
    for (var i = 0; i < arr.length; i++){ // first for loop, gets first item in array
        for (var j = 0; j < arr.length; j++){  //second or nested for loop, gets second item in array to compare with first
            console.log(arr, arr[j], arr[j+1]) // logs first and second item to show them being compared
            if (arr[j] > arr[j+1]){ //conditional statement to test if the first item is greater than the second item
                //Basic Swap!
                var temp = arr[j];  //create temp variable and set it equal to first item
                arr[j] = arr[j+1];  //swaps first item in array and sets it(first item) equal to the second item
                arr[j+1] = temp;    //this finishes the swap by setting the second item in the array equal to the temp variable, which was originally the first item in the array
            }
        }
    }
    return arr;
}

bubbleSort([37, 45, 29, 8])
console.log(bubbleSort([37, 45, 29, 8]))