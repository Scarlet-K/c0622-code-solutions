/* exported unique */

// Create an empty array
// Check the first index’s value with all the other index’s value
// If the first index’s value match with any other index’s value stop checking
// Else, keep checking until the end of the array and push the current value into the empty array.
// Return the final array

function unique(array) {
  // debugger;
  var finalArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var k = i + 1; k < array.length; k++) {
      if (array[i] === array[k]) {
        break;
      } else {
        finalArray.push(array[i]);
      }
    }
  }
  return finalArray;
}
