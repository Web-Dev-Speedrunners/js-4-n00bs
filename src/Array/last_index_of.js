/**
 * Returns last index of element in array.
 * @param {searchElement} arg The item to find.
 */
Array.prototype.myLastIndexOf = function (searchElement) {
  // start from the right
  let i = this.length;
  while (i > 0) {
    i--;
    if (this[i] == searchElement) {
      return i;
    }
  }
  return -1;
};
