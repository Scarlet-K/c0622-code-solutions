/* exported isAnagram */

// Create an empty object for firstString
// Create an empty object for secondString
// Go over the characters in the firstString
// At each character check if the object already has the property
//   If yes, increment its value by 1
//   Else, assign the current character as the property of the empty object with the value of 1
// Do the same for the secondString
// After going over all the characters in both first and second string, we should have two objects
// These two objects should have all characters as their properties and values that match how many of the characters appear in the string
// Go over all the properties of the two objects(which are characters in the strings)
// Compare the two objects by checking the properties and values
// If all the values AND values match, return true
// Else return false

function isAnagram(firstString, secondString) {
  // debugger;
  var newFirst = firstString.replaceAll(' ', '');
  var newSecond = secondString.replaceAll(' ', '');
  var first = {};
  var second = {};
  var result = false;
  if (newFirst.length !== newSecond.length) {
    return false;
  }
  for (var i = 0; i < newFirst.length; i++) {
    if (first[newFirst[i]]) {
      first[newFirst[i]]++;
    } else {
      first[newFirst[i]] = 1;
    }
    if (second[newSecond[i]]) {
      second[newSecond[i]]++;
    } else {
      second[newSecond[i]] = 1;
    }
    if (first[newFirst[i]] === second[newSecond[i]]) {
      result = true;
    } else {
      result = false;
      return false;
    }
  }
  return result;
}
