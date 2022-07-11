/* exported getValues */

// create an empty array
// use the for...in loop
// push the value of each property in to the array
// return the array

function getValues(object) {
  var valuesList = [];
  for (var keys in object) {
    valuesList.push(object[keys]);
  }
  return valuesList;
}
