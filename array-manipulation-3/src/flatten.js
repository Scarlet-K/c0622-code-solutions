/* exported flatten */

// Create an empty array
// Go over the indexes in the array
// Check if the value of the current index is an array by using Array.isArray method
// If it is go over that array at a new index and push the values into the returning variable
// If not push the current index into the returning variable

function flatten(array) {
  var finalArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var k = 0; k < array[i].length; k++) {
        finalArray.push(array[i][k]);
      }
    } else {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}
