//jdf3k23dfi8

//quokka

// [j, d, f, 3, k, 2, 3, d, f, i, 8]

function returnSum (str){

    var stringTwo = str.split(""); 

    let asum = 0;
    for (var t=0; t < str.length; t++){
        if (   parseInt(stringTwo[t]) != NaN ) {
            console.log(parseInt(stringTwo[t])) 
            
            asum = asum + parseInt(stringTwo[t]) 
            
        }
    }

    return asum;
}

console.log(returnSum("jdf3k23dfi8"))


function returnSum (str){

    var stringTwo = str.split(""); 

    let asum = 0;
    for (var t=0; t < str.length; t++){
        if (   "0123456789".includes(stringTwo[t]) ) {
            console.log(parseInt(stringTwo[t])) 
            
            asum = asum + parseInt(stringTwo[t]) 
            
        }
    }

    return asum;
}

console.log(returnSum("jdf3k23dfi8"))

function returnSum (str){

    var stringTwo = str.split(""); 

    let asum = 0;
    for (var t=0; t < str.length; t++){
        if (   "0123456789".includes(stringTwo[t]) ) {
            console.log(+stringTwo[t]) 
            
            asum = asum + +stringTwo[t]
            
        }
    }

    return asum;
}

console.log(returnSum("jdf3k23dfi8"))

