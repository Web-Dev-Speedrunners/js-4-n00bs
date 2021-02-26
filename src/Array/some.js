Array.prototype.mySome = function (callback) {
  for(let i = 0; i < this.length; i++){
    if(this[i] === undefined) continue;
    if(callback(this[i], i, this)) return true;
  }
  return false;
}