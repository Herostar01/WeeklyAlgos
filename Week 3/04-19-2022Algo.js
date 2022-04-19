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