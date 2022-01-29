//Selection Sort Algo

let arr = [64, 25, 12, 22, 11];

function selectionSort(arr){
for (let x = 0; x < arr.length; x++){
  //find smallest numner
  let min = x;
  for (let y = x+1; y < arr.length; y++){
    if (arr[y] < arr[min] ){
      min=y;
    }
  }
  if (min != x){
    // swap elements here code...\
    var temp = arr[x];
    arr[x] = arr[min];
    arr[min] = temp; 
  }
}
  return arr;
};

console.log(selectionSort(arr));

let arr = [64, 25, 12, 22, 11]; //

function selectionSort(arr){
for (let x = 0; x < arr.length; x++){
  //find smallest numner
  let min = x;
  // 
  for (let y = x+1; y < arr.length; y++){
    //line 15 is = if second index in array is less than first index in array
    if (arr[y] < arr[min] ){
      //change min to y, which is second index
      min=y;
    }
  }
  // then first for loop compares min with every other element in array
  if (min != x){
    // comparison statement checks if min is smaller than 
    // swap elements here code...\
    var temp = arr[x]; // temp = arr[x] = arr[0] = 64.
    //this code creates temp var and then swaps 
    arr[x] = arr[min]; // arr[x] = arr[min] = arr[4] = 11
    arr[min] = temp; // arr[min] = temp = 64
  }
}
  return arr;
};

console.log(selectionSort(arr));