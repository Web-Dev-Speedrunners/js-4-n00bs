/**
 * Returns a new array with the passed callback function applied on all
 * elements.
 * @param {callback} arg The function to be applied
 */
Array.prototype.myMap = function (callback) {
  const mappedArr = [];
  for (let i = 0; i < this.length; i++) {
    mappedArr.push(callback(this[i], i, this));
  }
  return mappedArr;
};
