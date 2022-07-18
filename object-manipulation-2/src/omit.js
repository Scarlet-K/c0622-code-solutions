/* exported omit */

// create a new object
// loop over the source objects property
// at each source objects property:
// loop over the strings in keys array
// check against all items in the keys array

// if the  does NOT have the string in keys
// the return value is undefined
// therefore, if the return value of the condition is undefined
// use the current string in keys to access the source object's property and value
// assign the source object's property and value to the new object
// return the new object

function omit(source, keys) {
  var omitObj = {};
  for (keys in source) {
    if (source[keys] === undefined) {
      omitObj[keys] = source[keys];
    }
  }
  return omitObj;
}
