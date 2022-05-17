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