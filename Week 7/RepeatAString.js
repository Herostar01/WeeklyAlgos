// Repeat a String

function repeatStringNumTimes(str, num) {

    let newStr = ""

    for (let a = 0; a < num; a++){
        newStr += str;
        console.log(newStr)
    }

    return newStr;
}

console.log(repeatStringNumTimes("MackAttack", 3));