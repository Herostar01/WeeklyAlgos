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