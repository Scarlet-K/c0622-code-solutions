/* exported findIndex */

// compare ALL numbers inside the array against the number given as value
// if the numbers match, return the index of the number
// if the numbers don't match, return -1

function findIndex(array, value) {
  var noValue = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return noValue;
}
