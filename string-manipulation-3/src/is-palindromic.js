/* exported isPalindromic */

// create a new string that omits all spaces
// create a for loop
// start at the first index of the string
// stop at the middle of the string
// compare the first index with the (last index - current index)

function isPalindromic(string) {
  var newString = string.replaceAll(' ', '');
  var result = false;
  for (var i = 0; i < Math.floor(newString.length / 2); i++) {
    if (newString[i] === newString[[newString.length - 1] - i]) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}
