// Find Longest Word


function longestWord(str) {

    var arr = str.split(" ")
    var longestW = 0;

    for ( var t = 0; t < arr.length; t++){
        if ( arr[t].length > longestW){
            longestW = arr[t].length;
        }

    }
    return longestW;
    
}

console.log(longestWord("The Gucci Man is suffering from success eternallyAlwasy"))

let abc = [12,1,5,90]
for ( let t = abc.length; t > 2; t--){
    console.log("Hi")
}

console.log("hi")

for (let x = 0; x < 3; x++){
    console.log("This better work")
}