//Practice Selection Sort Algo From Memory
























function selectionSortAFM(arr){

    for(a = 0; a < arr.length; a++){
        var lowest = a;
        for(b = a+1; b < arr.length; b++){
            if( arr[b] < arr[lowest]){
                lowest = b;
            }
        }
        console.log(arr, arr[b], arr[lowest])
        console.log("SWAPPING TO: ")
        var temp = arr[a]; 
        arr[a] = arr[lowest]; 
        arr[lowest] = temp; 
        console.log(arr)
    }
    console.log(arr)
    return arr;
}

selectionSortAFM([56, -32, 23, 8, -7, 77, 23]);