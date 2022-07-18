// Bubble Sort

function BubbleSort(arr){
    
    for(a = 0; a < arr.length; a++){
        for(b = 0; b < arr.length; b++){

            if (arr[b] > arr[b+1]){
                //SWAP!
                var temp = arr[b];
                arr[b] = arr[b+1];
                arr[b+1] = temp;
            }
        }
    }

    return arr;
}

console.log(BubbleSort([5,9,2,44,-42,57]))

//More Efficient Version of Bubble Sort Algo

function BSAfAST(arr){

    for(a = arr.length; a > 0; a--){
        for (b = 0; b < a-1; b++){

            if (arr[b] > arr[b+1]){
                //SWAP
                var temp = arr[b];
                arr[b] = arr[b+1];
                arr[b+1] = temp;

            }
        }
    }

    return arr;
}

console.log(BSAfAST([44,2,-44,21,7,-2,-8]))