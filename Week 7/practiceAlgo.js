// Repeat a string

function strRepeat(str, num){

    var newStr = "";

    for ( var a = num; a > 0; a--){

        newStr += str;
        console.log(newStr)

    }

    return newStr;
}

console.log(strRepeat("Focus", 3))