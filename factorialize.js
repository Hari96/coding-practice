// factorializing a number - I use recursion here
var ans = 0;
function factorialize(num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);
