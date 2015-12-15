function truncate(str, num) {
  var end = num - 3;
  if (num <= 3) {
    end = num;
  }
  if (num >= str.length) {
    return str;
  }
  var newStr = str.slice(0, end);
  newStr += "...";
  return newStr;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
