Array.prototype.myEvery = function(callback, input) {
    for (let i = 0; i < this.length; i++) {
        if (!callback.call(input, this[i], i, this))
            return false;
    }
    return true;
};

/*
const arr = [1,2, 3, 4];
const isBelowThreshold = (currentValue) => currentValue < 11;
console.log(arr.myEvery(isBelowThreshold));
*/