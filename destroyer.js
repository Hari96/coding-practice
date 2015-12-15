function destroyer(arr) {
  var argArr = [];
  for (var i = 1; i < arguments.length; i++) {
    argArr[i - 1] = arguments[i];
  }
  var temp = arr;
  var res = arr.filter(function(val) {
    if (argArr.indexOf(val) === -1) {
        return val;
      }

  });
  return res;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
