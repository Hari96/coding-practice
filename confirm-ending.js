function end(str, target) {
  var tlen = target.length;
  var sel = str.substr(str.length - tlen, tlen);
  if (sel === target) {
    return true;
  }
  return false;
}

end("Bastian", "n");
