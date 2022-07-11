/* exported toObject */

// create an empty object
// assign a new key value pair by using:
// the first element of the array = key
// the second element = value
// bracket notation!

function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
