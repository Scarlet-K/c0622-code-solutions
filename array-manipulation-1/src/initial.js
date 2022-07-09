/* exported initial */

// create a new array
// push all elements into the new array
// stop before the last element in the array

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
