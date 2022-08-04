function findElement(arr, func) {

    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];

        if (func(num) ) {
            return num;
        }
    }


    return undefined;
}


console.log(findElement([1, 7, 3, 11, 17], num => num % 2 === 0));

console.log(findElement([1, 7, 3, 11, 10], num => num % 2 === 0));
