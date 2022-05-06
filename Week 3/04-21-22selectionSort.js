// Selection Sort


























function selectionSort(arr){
    for(var a = 0; a < arr.length; a++){
        var lowest = a;
        for(var b = a+1; b < arr.length; b++){
            if(arr[b] < arr[lowest]){
                lowest = b;
            }
        }
        console.log(arr, arr[a], arr[lowest])
        console.log("SWAPPING TO: ")
        var temp = arr[a];
        arr[a] = arr[lowest];
        arr[lowest] = temp;
        console.log(arr)
    }
    
    return arr;
}

selectionSort([10,2,34,22,19,17]);
// i,j, lowest
// 0,1, 1
// 0,2, 2
// 0,3, 2
// 0,4, 2


// Selection Sort

function selectionSort(arr){
    for(var a = 0; a < arr.length; a++){
        var lowest = a;
        for(var b = a+1; b < arr.length; b++){
            if(arr[b] < arr[lowest]){
                lowest = b;
            }
        }
        if(a !== lowest) {
            
            console.log(arr, arr[a], arr[lowest])
            console.log("SWAPPING TO: ")
            var temp = arr[a];
            arr[a] = arr[lowest];
            arr[lowest] = temp;

        }
    }
    console.log(arr)
    return arr;
}

selectionSort([0,2,34,22,10,19,17]);