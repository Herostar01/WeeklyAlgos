// Practicing Bubble Sort Algo from Memory

function BubbleSortFromMemory(arr){
    for(a = 0; a < arr.length; a++){
        for(b=0; b < arr.length; b++){

            if (arr[b] > arr[b+1]){
                //swap
                var temp = arr[b];
                arr[b] = arr[b+1];
                arr[b+1] = temp;
            }
        }
    }
    return arr;
}

console.log(BubbleSortFromMemory([8,23,98,34,12,55,34]))

//More efficient version
function BubbleSortQuick(arr){
    for(var a = arr.length; a > 0; a--){
        for(var b = 0; b < a-1; b++){
            console.log(arr, arr[b], arr[b+1])
            if(arr[b] > arr[b+1]){
                //swap!
                var temp = arr[b]
                arr[b] = arr[b+1]
                arr[b+1] = temp
            }
        }
    }
    return arr;
}

console.log(BubbleSortQuick([4,9,2,88,3,23,90,34]))