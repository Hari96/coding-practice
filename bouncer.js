function bouncer(arr) {
  var res = arr.filter(function(val) {
    if (val !== false || val !== "" || val !== null || val !== 0 || !isNaN(val) || val !== undefined) {
      return val;
    }
  });
  return res;
}

bouncer([7, "ate", "", false, 9]);
