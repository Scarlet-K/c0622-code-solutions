/* exported capitalizeWords */

// every first character of a word is uppercase
// the first word's first character is always at index 0
// every next word starts after a space
// every next word's first character is always after space

function capitalizeWords(string) {
  var newString = string[0].toUpperCase();
  // newString = 'N'
  for (var i = 1; i < string.length; i++) {
    if (string[i] !== ' ') {
      newString += string[i];
      // newString = 'Needssolution'
    } else {
      newString += string[i + 1].toUpperCase();
      // newString = 'NeedsSsolution'
    }
  }
  return newString;
}
