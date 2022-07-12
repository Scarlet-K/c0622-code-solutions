/* exported lastChars */

// create a variable with empty string
// create a for loop
// start the loop at the last character
// set the final expression to decrement the counter variable
// the length of the string - given length = the index of the last character = when to STOP
// concatenate string[i] with variable
// loop over the new string
// start the loop at the last character
// return variable

function lastChars(length, string) {
  var lastChars = '';
  for (var i = string.length - 1; i >= string.length - length; i--) {
    if (string[i]) {
      lastChars += string[i];
    }
  }
  return lastChars;
}
