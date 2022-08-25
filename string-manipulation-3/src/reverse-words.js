/* exported reverseWords */

// Create an empty string
// Go over the characters in the string (outer loop)
// Stop if the character is a whitespace OR the last char (outer loop)
// Go over the character in the string backwards and add the current char to the empty string (inner loop)
// Set the inner loop to start where we stopped in the outer loop
// IF the next char will be a whitespace OR the first char of the string stop (inner loop)
// Restart going over the characters (outer loop)
// Repeat until at last char
// Return newString

function reverseWords(string) {
  var spaceString = string + ' ';
  var newString = '';
  for (var i = 0; i < spaceString.length; i++) {
    if ((spaceString[i] === ' ') || (i === spaceString.length - 1)) {
      for (var k = i; ; k--) {
        newString += spaceString[k];
        if ((spaceString[k - 1] === ' ') || (k <= 0)) {
          break;
        }
      }
    }
  }
  return newString.trimStart();
}
