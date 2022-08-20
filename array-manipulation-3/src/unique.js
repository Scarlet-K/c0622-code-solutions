/* exported unique */

// create a copy of the given array
// grab the first index of the array
// check the first index with the next index in order
// if it is a match, splice the matching index and remove it from the array
// do this until the end of the array
// grab the second index of the array
// repeat the process
// return the altered copied array

function unique(array) {
  var newArray = array;
  for (var i = 0; i < newArray.length; i++) {
    for (var k = i + 1; k < newArray.length - 1; k++) {
      if (newArray[i] === newArray[k]) {
        newArray.splice(k, 1);
      }
    }
  }
  return newArray;
}
