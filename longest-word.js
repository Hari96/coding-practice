function findLongestWord(str) {
  var strArr = str.split(" ");
  var temp = 0;
  for (var i = 0; i < strArr.length; i++) {
    if(strArr[i].length > temp) {
      temp = strArr[i].length;
    }
  }
return temp;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
