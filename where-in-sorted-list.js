function where(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });
  var ind = 0;
  for (var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      ind = i;
      return ind;
    }
  }
  return arr.length;
}

where([40, 60], 50);
