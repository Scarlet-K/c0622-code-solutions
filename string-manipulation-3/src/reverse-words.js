/* exported reverseWords */

// Create an empty string
// Go over the characters in the string
// Stop if the character is a whitespace OR the last char
// Go over the character in the string backwards until the current char is a whitespace OR the first char
// Add each current character to the empty string
// Restart going over the characters from the character after the whitespace
// Repeat until at last char
// Return newString
// PROBLEM: k is being reset to 20, which is the last index

function reverseWords(string) {
  // debugger;
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      for (var k = string.length - 1; k >= 0; k--) {
        newString += string[k];
        if (string[k] === ' ') {
          break;
        }
      }
    }
  }
  return newString;
}
