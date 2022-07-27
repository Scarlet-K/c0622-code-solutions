/* exported dropRight */

// create a new array
// loop over the array
// stop when the current index is greater than the length - count
// push the current index at every iteration
// return newArray

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
