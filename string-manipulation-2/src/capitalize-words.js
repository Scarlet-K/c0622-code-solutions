/* exported capitalizeWords */

// turn all the characters to lowercase
// store the result in a variable
// split the lowercased characters at the space
// store the result in a variable = array
// loop over the array and uppercase all the first characters of each word
// concatenate with the rest of the word starting at the second character
// push the new concatenated word into a new array
// return the array as a string

function capitalizeWords(string) {
  var newString = string.toLowerCase();
  var wordsArray = newString.split(' ');
  var newWord = [];
  for (var i = 0; i < wordsArray.length; i++) {
    newWord.push(wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1));
  }
  return newWord.join(' ');
}
