/* exported unique */

// 1. Create an empty array
// 2. Grab the first index
// 3. Go over the array starting from the next index over all the way to the last index
// 4. IF the first index’s value MATCH with any other index’s value stop checking
// 5. Grab the second index
// 6. Repeat the #3
// 7. ELSE, keep checking until the end of the array and push the current value into the empty array
// 8. Return the final array

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
