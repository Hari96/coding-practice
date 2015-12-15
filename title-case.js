function titleCase(str) {
  str = str.toLowerCase();
  var strArr = str.split(" ");
  var char = "", ustr = "";
  for (var i = 0; i < strArr.length; i++) {
    char = strArr[i].charAt(0);
    ustr = char.toUpperCase();
    strArr[i] = strArr[i].replace(strArr[i].charAt(0), ustr);
  }
  str = strArr.join(" ");
  return str;
}

titleCase("I'm a little tea pot");
