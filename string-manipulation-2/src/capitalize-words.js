/* exported capitalizeWords */

// loop over the string
// if the character before the current character isn’t a space
// add the character to the new string
// else
// capitalize the current character
// add it to the new string

function capitalizeWords(string) {
  var newString = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] !== ' ') {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}
