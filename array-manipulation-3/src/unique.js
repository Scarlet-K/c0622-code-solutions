/* exported unique */

// create an empty new array
// check if the newArray includes the items in array
// only add the item if it is NOT included
// return the new array

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
