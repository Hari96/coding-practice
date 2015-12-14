function palindrome(str) {
  var re = /[\(\)_\-,\.\s]/g;
  str = str.replace(re, "");
  var lcase = str.toLowerCase();
  var strArr = lcase.split("");
  var newStrArr = strArr.reverse();
  var newStr = newStrArr.join("");
  if (lcase == newStr) {
    return true;
  }
  return false;
}

console.log(palindrome("eye"));
