Array.prototype.myFilter = function (filterFn) {
  const filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    const entry = this[i];
    if (filterFn(entry, i, this)) filteredArr.push(entry);
  }
  return filteredArr
};