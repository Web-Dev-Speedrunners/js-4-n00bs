/**
 * Returns ther resulting from the repeated application of the callback across a
 * sliding window of the array.
 * @param {callback} arg The function to be applied
 * @param {initialValue} arg The starting value
 *
 * If initialValue is not provided, reduce() will execute the callback function
 * starting at index 1, skipping the first index. If initialValue is provided,
 * it will start at index 0.
 *
 */
Array.prototype.myReduce = function (callback, initialValue) {
  if (this.length == 0) {
    return initialValue;
  }
  let runningValue = initialValue ? callback(initialValue, this[0]) : this[0];
  for (let i = 1; i < this.length; i++) {
    runningValue = callback(runningValue, this[i]);
  }
  return runningValue;
};
