Array.prototype.myIndexOf = function (searchItem, startIndex = 0) {
  for(let i = startIndex; i < this.length; i++){
    if(this[i] === undefined) continue;
    if(this[i] === searchItem) return i;
  }
  return -1;
}

