// Factoralize a Number

function Factoralize(num){

    var product = 1; 

    for (a = num; a > 0; a--){
        product *= a; 
    }

    console.log(product)
    return num;
}

Factoralize(5);

Factoralize(10);

Factoralize(20);

Factoralize(0);