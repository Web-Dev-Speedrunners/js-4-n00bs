Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i ++) {
    callback(this[i], i, this);
  }
  return undefined;
};

/*
const arr = [1,2, 3, 4];
arr.myEach(element => console.log(element));
*/

