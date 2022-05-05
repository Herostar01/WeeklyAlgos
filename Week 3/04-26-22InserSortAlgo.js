// Insertion Sort

function insertionSort(arr){

    for( var i = 1; i < arr.length; i++){
        var currentVal = arr[i];
        for( var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = currentVal;
        console.log(arr)
    }
    return arr;
}

insertionSort([2,1,9,76,4])



























//Practice Algos From Memory

function BubbleSort(arr){

    for(a = 0; a < arr.length; a++){
        for( b = 0; b < arr.length; b++){
            if ( arr[b] > arr[b+1]){
                //SWAP
                var temp = arr[b];
                arr[b] = arr[b+1];
                arr[b+1] = temp;
            }
        }
    }

    return arr;
}

console.log(BubbleSort([9,34,23,98,38,1,45,9]))

function BubbleSortV2(arr){

    const swap = (arr, idx1, idx2) => {
        [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ]
    }

    for( a = arr.length; a > 0; a--){
        for( b = 0; b < a-1; b++){
            if ( arr[b] > arr[b+1]){
                //SWAP
                swap(arr, b, b+1)
            }
        }
    }

    return arr;
}

console.log(BubbleSortV2([9,34,23,98,38,1,45,9]))










//Selection Sort Algo From Memory

function SelSort(arr){

    for( a = 0; a < arr.length; a++){
        var lowest = a;
        for( b = a+1; b < arr.length; b++){
            if( arr[b] < arr[lowest]){
                lowest = b;
            }

            if ( a !== lowest){

                //SWAP
                const swap = (arr, idx1, idx2) => {
                    [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ]
                }
                swap(arr, a, lowest)
                
            }
        }
    }
    console.log(arr)
    return arr;
}

SelSort([45,67,34,2,-33,78,12,-66])