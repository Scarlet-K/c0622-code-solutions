/* exported invert */

// create a new object
// use a for in loop to loop over the source object's key
// reassign the new object's key as the source object's value
// reassign the new object's value as source object's key

function invert(source) {
  var newObject = {};
  for (var key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
}
