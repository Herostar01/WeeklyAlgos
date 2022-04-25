//Practicing Bubble Sort Algo From Memory

function BubbleSortAFM(arr){

    const SWAP = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    };

    for(var a = 0; a < arr.length; a++){
        for(b= 0; b < arr.length; b++){
            if(arr[b] > arr[b+1]){
                //SWAP function
                SWAP(arr, arr[b], arr[b+1])
            }
        }
    }
    console.log(arr)
    return arr;
}

BubbleSortAFM([-5,76, 2, 9, 33, 28, 12]);













function BubbleSortAFMV2(arr){
    for(var x = 0; x < arr.length; x++){
        for(var y = 0; y < arr.length; y++){
            if(arr[y] > arr[y+1]){
                //SWAP
                var temp = arr[y];
                arr[y] = arr[y+1];
                arr[y+1] = temp;
            }
        }
    }
    console.log(arr)
    return arr;
}

BubbleSortAFMV2([-5,76, 2, 9, 33, 28, 12]);