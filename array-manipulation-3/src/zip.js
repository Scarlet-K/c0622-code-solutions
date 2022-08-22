/* exported zip */

// Create a variable called length
// Create an empty array to return the final array
// Compare the length of the first array and the second array
// Assign the shorter length to the variable length
// Go over the same index of the first and second array
// Create a new subArray and add the indexes to the sub array
// Add the subArray to the final array
// Return the final array

function zip(first, second) {
  var length = 0;
  var finalArray = [];
  if (first.length < second.length) {
    length = first.length;
  } else {
    length = second.length;
  }
  for (var i = 0; i < length; i++) {
    var subArray = [];
    subArray.push(first[i]);
    subArray.push(second[i]);
    finalArray.push(subArray);
  }
  return finalArray;
}
