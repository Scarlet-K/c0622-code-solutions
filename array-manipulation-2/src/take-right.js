/* exported takeRight */

// create a new array
// loop over the array
// start at the end of the array
// push the items into the new array
// stop at the count
// if the count > array.length, return a shallow copy of the entire array

function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - 1; i >= count; i--) {
    if (count > i) {
      return array.slice(0, count);
    } else {
      newArray.unshift(array[i]);
    }
  }
  return newArray;
}
