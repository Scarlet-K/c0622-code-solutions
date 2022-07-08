/* exported addSuffixToAll */

// store the new words inside an array
// add the suffix to the words at each index

function addSuffixToAll(words, suffix) {
  var newWords = [];
  for (var i = 0; i < words.length; i++) {
    newWords.push(words[i] + suffix);
  }
  return newWords;
}
