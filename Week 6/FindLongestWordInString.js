//Find the Longest Word in a String

function LongestWord(str){

    let words = str.split(' ');
    let maxLength = 0;
    
    for(var i = 0; i < words.length; i++){
        if(words[i].length > maxLength){
            maxLength = words[i].length;
        }
    }

    

    return maxLength;
}

console.log(LongestWord("The quick brown jackalantern becomes bright"))

