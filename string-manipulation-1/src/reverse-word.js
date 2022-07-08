/* exported reverseWord */

// reverse the order of the characters in the word
// for each character:
// make the last character the first character

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
