//bubble sort ES20 Version

function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    };

    for (let a = arr.length; a > 0; a--){
        for (let b = 0; b < a-1; b++){
            if (arr[b] > arr[b+1]) {
                swap(arr, b, b+1)
            }
            console.log(arr[b], arr[b+1])
        }
        console.log("One Pass Complete")
    }
    return arr;
}

console.log(bubbleSort([3, 45,2, 67, 2, 44, 123, 8, -3, 56]))