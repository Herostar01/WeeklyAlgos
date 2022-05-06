// Practice Algos from memory

function SelectionSort(arr) {
    
    for( var a = 0; a < arr.length; a++){
        var currentVal = arr[a];
        for ( var b = a-1; b >= 0 && arr[b] > currentVal; b--){
            arr[b+1] = arr[b];
            console.log(arr, arr[b], arr[b+1])
        }
        arr[b+1] = currentVal;
        console.log(arr, arr[b], arr[b+1]);
    }

    console.log(arr);
    return arr;
}

SelectionSort([5,3,7,12,-7,19])   























function BSAFM(arr){

    for( var a = 0; a < arr.length; a++){
        for ( var b = 0; b < arr.length; b++){
            if ( arr[b] > arr[b+1]) {
                //SWAP
                var temp = arr[b];
                arr[b] = arr[b+1];
                arr[b+1] = temp;
            }
        }
    }

    console.log(arr);
    return arr;
}

BSAFM([5,3,7,12,-7,19])






















function SSAFM(arr){
    for(var a = 0; a < arr.length; a++){
        var lowest = a;
        for(var b = a + 1; b < arr.length; b++){
            
            if( arr[b] < arr[lowest]){
                lowest = b;
            }
        }
        if (a !== lowest ) {

            var temp = arr[a];
            arr[a] = arr[lowest];
            arr[lowest] = temp;
        
        }
    }
    return arr;
}

console.log(SSAFM([5,3,7,12,-7,19]))






















function ISAFM(arr){

    for ( var a = 0; a < arr.length; a++){
        var currentVal = arr[a];
        for ( var b = a-1; b >=0 && arr[b] > currentVal; b--){
            arr[b+1] = arr[b];
        }
        arr[b+1] = currentVal;
    }

    console.log(arr);
    return arr;
}

ISAFM([6,11,44,-21,19,123,22])