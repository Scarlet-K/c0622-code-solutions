/* exported tail */

// create a new array
// starting from the second element with index 1
// push the element into the new array

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
