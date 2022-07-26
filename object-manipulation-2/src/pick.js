/* exported pick */

// create a new object
// if the string in keys = a property of the source object
// use the string in keys to access the property and value of the source object
// assign the source's property and value to the new object
// return the new object

function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObj[keys[i]] = source[keys[i]];
    }
  }
  return newObj;
}
