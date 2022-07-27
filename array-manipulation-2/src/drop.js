/* exported drop */

// create new empty array
// loop over the array
// start at the count
// push items into a new array
// stop at the end of array
// return new array

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
