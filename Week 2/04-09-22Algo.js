// Selection Sort Algo

function selectionSort(arr){
    for (var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            console.log(i, j)
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
            console.log(arr[j], arr[lowest])
        }
        console.log("***********")

        console.log(arr)
        console.log("SWAPPING TO: ")
        var temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest] = temp;
        console.log(arr)
        console.log("**************")
    }
    return arr;
}

selectionSort([34,22,10,19,17]);