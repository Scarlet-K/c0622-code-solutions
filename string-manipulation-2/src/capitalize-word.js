/* exported capitalizeWord */

// create a variable that stores the first character uppercased
// start looping from the second character
// create a new string with all the characters lowercased
// concatenate the return value with the first character uppercased
// create a condition for JavaScript

function capitalizeWord(word) {
  var firstLetter = word[0].toUpperCase();
  var newString = '';
  for (var i = 1; i < word.length; i++) {
    newString += word[i];
    if (word.toLowerCase() === 'javascript') {
      newString = 'JavaScript';
    } else {
      newString = firstLetter + newString;
    }
  }
  return newString;
}
