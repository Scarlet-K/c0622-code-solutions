/* exported capitalizeWord */

// create a variable that stores the first character uppercased
// start looping from the second character
// create a new string with all the characters lowercased
// concatenate the return value with the first character uppercased
// create a condition for JavaScript

function capitalizeWord(word) {
  var newString = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    if (word.toLowerCase() === 'javascript') {
      newString = 'JavaScript';
    } else {
      newString += word[i].toLowerCase();
    }
  }
  return newString;
}
