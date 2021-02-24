/**
 * Returns last index of element in array.
 * @param {searchElement} arg The item to find.
 */
Array.prototype.myMap = function (searchElement) {
  // start from the right
  const i = this.length;
  while (i > 0) {
    i--;
    if (this[i] == searchElement) {
      return i;
    }
  }
  return i;
};
