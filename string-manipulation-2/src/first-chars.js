/* exported firstChars */

// create a variable with empty string
// create a for loop
// the condition expression of the for loop should be less than the given length
// create a conditional inside the for loop to check whether the string[i] is valid
// return the concatenation of the result of the loop and the variable

function firstChars(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (string[i]) {
      newString += string[i];
    }
  }
  return newString;
}
