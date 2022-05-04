function AlgoFromMemoryBubbleSort(arr){

    for(var a = 0; a < arr.length; a++){
        for(var b = 0; b < arr.length; b++){
            if( arr[b] > arr[b+1] ) {
                //SWAP
                var temp = arr[b];
                arr[b] = arr[b+1];
                arr[b+1] = temp;
            }
        }
    }

    console.log(arr)
    return arr;
}

AlgoFromMemoryBubbleSort([9,3,5,33,2,15]);

function AFMSelSort(arr){

    for(var a = 0; a < arr.length; a++){
        var lowest = a;
        for( var b = a+1; b < arr.length; b++){
            if(arr[b] < arr[lowest]){
                lowest = b
            }
        }
        //SWAP
        var temp = arr[a];
        arr[a] = arr[lowest];
        arr[lowest] = temp;
    }

    console.log(arr)
    return arr;
}

AFMSelSort([9,3,5,33,2,15]);