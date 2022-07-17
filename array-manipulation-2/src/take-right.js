/* exported takeRight */

// create a new array
// loop over the array
// check BEFORE the loop whether the given count is greater than the length of the array
// if true, return a shallow copy of the entire array
// if false, start loop
// start at the end of the array
// determine the range by subtracting the highest value (starting point) with the lowest value (stopping point)
// push every new item before the previous item
// return the new array

function takeRight(array, count) {
  var newArray = [];
  if (count > array.length - 1) {
    return array.slice(0, count);
  }
  for (var i = array.length - 1; i >= array.length - count; i--) {
    newArray.unshift(array[i]);
  }
  return newArray;
}
