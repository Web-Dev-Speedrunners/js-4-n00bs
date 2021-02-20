Object.prototype.grabValues = function (obj) {
  const objType = typeof(obj);
  if(objType === "undefined"){
    throw new TypeError("Cannot convert undefined or null to object");
  }

  let res = [];
  if(objType === "object"){
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        res.push(value);
      }
    }
  }
  return res;
}