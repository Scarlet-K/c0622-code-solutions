/* exported reverseWords */

// create an empty string
// start a loop (outer loop)
// go over the characters in the string
// if the character is a whitespace
//  start ANOTHER loop (inner loop) at the current index of the outer loop
//  go over the characters backwards
//  if the next char will be a whitespace
//    break out from current iteration (of BOTH loops since this one is nested)
//  else
//    add the current chars to the empty string
// Restart going over the characters at the next index (outer loop)
// Repeat until at last character
// Return newString

function reverseWords(string) {
  var spaceString = string + ' ';
  var newString = '';
  for (var i = 0; i < spaceString.length; i++) {
    if (spaceString[i] === ' ') {
      for (var k = i; k >= 0; k--) {
        newString += spaceString[k];
        if ((spaceString[k - 1] === ' ')) {
          break;
        }
      }
    }
  }
  return newString.trimStart();
}
