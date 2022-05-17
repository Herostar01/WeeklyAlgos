// Selection Sort

function SS(arr){

    for( var a = 0; a < arr.length; a++){
        var lowest = a;

        for(var b = a+1; b < arr.length; b++){
            if (arr[b] < arr[lowest]){
                lowest = b;
            }
        }

        if ( a !== lowest ) {

            var temp = arr[a];
            arr[a] = arr[lowest];
            arr[lowest] = temp;

        }

    }

    console.log(arr);
    return arr;
}

SS([5,7,1,99,34,-33])

//Bubble Sort Algo

function BS(arr){

    for( var a = 0; a < arr.length; a++) {
        for ( var b = 0; b < arr.length; b++){
            
            if ( arr[b] > arr[b+1] ) {
                //SWAP!
                var temp = arr[b];
                arr[b] = arr[b+1];
                arr[b+1] = temp;
            }
        }
    }

    console.log(arr);
    return arr;
}
BS([4,6,2,90,-33,-44,26])

//Bubble Sort smart way

function BSort(arr){

    for ( var a = arr.length; a > 0; a--){
        for ( var b = 0; b < a - 1; b++){

            if ( arr[b] > arr[b+1]) {
                //SWAP!
                var temp = arr[b];
                arr[b] = arr[b+1];
                arr[b+1] = temp;
            }
        }
    }

    console.log(arr);
    return arr;
}
BSort([4,6,2,90,-33,-44,26])