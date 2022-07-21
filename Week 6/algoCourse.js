// Convert Celsius to Fahrenheit

function convertCtoF(num){

    var F = (num * (9/5));
    var answer = F + 32;

    console.log(answer)
    return answer;
}

convertCtoF(-30);

convertCtoF(-10);

convertCtoF(20);

convertCtoF(30);

//Reverse a String

function ReverseString(string){

    var ReverseStr = "";
    var arr = [];

    for (T = string.length - 1; T >= 0; T--){
        console.log(T);
        console.log(string[T]);
        arr.push(string[T])
    }

    console.log(arr);
    return arr;
}

ReverseString("HELLO")

