Array.prototype.myKeys = function* () {
  for(let i = 0 ; i < this.length ; i++)  {
    yield i
  }
};
