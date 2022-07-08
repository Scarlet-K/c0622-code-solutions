/* exported isVowel */

// vowels [a, e, i , o , u]
// check if the char that is lowercased is strictly equal to the vowel that is also lowercased
// if it is change the result to true;
// if not return the result set to false;

function isVowel(char) {
  var result = false;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (char.toLowerCase() === vowels[i]) {
      result = true;
    }
  }
  return result;
}
