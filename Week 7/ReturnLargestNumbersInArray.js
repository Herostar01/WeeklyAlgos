// Return Largest Numbers in Arrays

function ReturnLargestArr(arr){

    let newArr = [];

    //first for loop to go through each array
    for (var t = 0; t < arr.length; t++){

        //create variable to keep track of largest num in each sub-array
        let largestNumber = arr[t][0]

        //second for loop to iterate through each sub array
        for (let s = 1; s < arr[t].length; s++){
            if ( arr[t][s] > largestNumber) {
                largestNumber = arr[t][s]
            }
        }
        newArr[t] = largestNumber;
        console.log(newArr)
    }

    return newArr;
}

console.log(ReturnLargestArr([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))