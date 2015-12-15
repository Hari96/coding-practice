function repeat(str, num) {
  var finalStr = "";
  if (num <= 0) {
    return finalStr;
  }
  for (var i = 1; i <= num; i++) {
    finalStr += str;
  }
  return finalStr;
}

repeat("abc", -3);
