//function findLongestWord(str){
    //const array = str.split('')
    
   // var max = ""
   // for (let index = 0; index < array.length; index++) {
       // if (array[index].length > max.length) {
       // max = array[index]
      //  }
        
   // }
   // return max
//}

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = ""
    for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord.length){
    longestWord = strSplit[i]
    }
    }
    return longestWord;
}
console.log (findLongestWord("May the force be with you"))