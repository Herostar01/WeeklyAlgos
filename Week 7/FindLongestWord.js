// Find the Longest Word in a String 

function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;

    for ( let i = 0; i < words.length; i++){

        if ( words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }

    return maxLength;
}

console.log(findLongestWordLength("The Lightining struck the naked emperor"))