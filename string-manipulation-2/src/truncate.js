/* exported truncate */

// create a new var storing an empty string
// loop over the string starting at 0
// stop at length
// concatenate the current character if it has a value
// return the newString with ellipsis concatenated

function truncate(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (string[i]) {
      newString += string[i];
    }
  }
  return newString + '...';
}
