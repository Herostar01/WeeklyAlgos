//Practicing Bubble Sort Algo From Memory

function BubbleSortAFM(arr){

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    };

    for(var a = arr.length; a > 0; a--){
        for(b= 0; b < a-1; b++){
            if(arr[b] > arr[b+1]){
                //swap function
                swap(arr, b, b+1)
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



























function BubbleSortAFMV3(arr){

    for(x = arr.length; x > 0; x--){
        for(y = 0; y < x-1; y++){
            if (arr[y] > arr[y+1]){
                //SWAP
                var temp = arr[y];
                arr[y] = arr[y+1];
                arr[y+1] = temp;
            }
        }
        console.log(arr)
        console.log("********")
    }

    console.log(arr)
    return arr;
}

BubbleSortAFMV3([3, 19, 34, 12, -4, -99, 49, -69]);



























function BubbleSortAFMV4(arr){

    const SWAP = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for(x = 0; x < arr.length; x++){
        for(y = 0; y < arr.length; y++){
            if(arr[y] > arr[y+1]) {
                //SWAP
                SWAP(arr, y, y+1);
            }
        }
        console.log(arr)
        console.log("********")
    }

    console.log(arr);
    return arr;
}

BubbleSortAFMV4([3, 19, 34, 12, -4, -99, 49, -69]);