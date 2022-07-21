/* exported lastChars */

// create a variable with empty string
// create a for loop
// the length of the string - given length = the index of the first last character
// concatenate string[i] with variable

function lastChars(length, string) {
  var lastChars = '';
  for (var i = string.length - length; i < string.length; i++) {
    if (string[i]) {
      lastChars += string[i];
    }
  }
  return lastChars;
}
