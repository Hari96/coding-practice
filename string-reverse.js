// reversing a string - result must be a string
function reverseString(str) {
  str = str.split("");
  str.reverse();
  str = str.join("");
  return str;
}

reverseString("hello olleh");
