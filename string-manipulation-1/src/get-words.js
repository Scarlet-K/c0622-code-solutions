/* exported getWords */

// if string is an actual value
// split the word where there is a space
// return a new array with those words
// if not
// return an empty array

function getWords(string) {
  if (string) {
    return string.split(' ');
  } else {
    return [];
  }
}
