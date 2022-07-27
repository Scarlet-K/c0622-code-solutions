/* exported isAnagram */

// compare the letters inside secondString with letters inside firstString
// if the current letter is inside the firstString
// get rid of the current letter inside the secondString
// get rid of the matching letter inside the firstString
// if the length of both strings are equal to 0
// return true
// else return false

function isAnagram(firstString, secondString) {
  var newFirst = firstString.replaceAll(' ', '');
  var newSecond = secondString.replaceAll(' ', '');
  var slicedFirst = '';
  for (var i = 0; i < newSecond.length; i++) {
    for (var k = 0; k < newFirst.length; k++) {
      if (newSecond[i] === newFirst[k]) {
        slicedFirst += newFirst.slice(k, k + 1);
      }
    }
  }
  return slicedFirst;
}
