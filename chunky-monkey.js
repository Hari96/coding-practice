function chunk(arr, size) {
  var num = Math.ceil(arr.length/size);
  var c = 0, res1 = [], res2 = [];
  for (var i = 0; i < num; i++) {
    for (var j = 0; j < size; j++) {
      if (arr[c] === undefined) {
        res2.push(res1);
        return res2;
      }
      res1.push(arr[c]);
      c++;
    }
    res2.push(res1);
    res1 = [];
  }
  return res2;
}

chunk(["a", "b", "c", "d"], 2);
