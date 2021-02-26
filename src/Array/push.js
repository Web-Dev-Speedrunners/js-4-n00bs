
Array.prototype.myPush = function(elementToAdd) {
    this[this.length] = elementToAdd;    
    return this.length;
 };
   
 
/*
 const arr = [1,2, 3, 4, 7, 8];
 const elementToAdd = 6;

 const count = arr.myPush(elementToAdd);
 console.log(count);
 */