Array.prototype.myIncludes = function(searchEntry, startIndex=0) {
  let actualStartIndex = startIndex
  if(actualStartIndex < 0){
    const calculatedIndex = this.length + startIndex
    actualStartIndex = (calculatedIndex < 0) ? 0 : calculatedIndex
  }
  for(let i = actualStartIndex ; i < this.length ; i++){
    const entry = this[i]
    if (entry === searchEntry || (isNaN(entry) && isNaN(searchEntry))) return true
  }
  return false
}