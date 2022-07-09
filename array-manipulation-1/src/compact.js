/* exported compact */

// create a new array
// check if element is truthy
// push only if condidtion results to true

function compact(array) {
  var truthyArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyArray.push(array[i]);
    }
  }
  return truthyArray;
}
