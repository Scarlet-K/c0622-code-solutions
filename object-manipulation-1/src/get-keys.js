/* exported getKeys */

// create an empty array
// use the for...in loop to go through all the keys of the object
// push the keys into the empty array
// return the array

function getKeys(object) {
  var keyList = [];
  for (var keys in object) {
    keyList.push(keys);
  }
  return keyList;
}
