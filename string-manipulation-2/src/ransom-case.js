/* exported ransomCase */

// every other character = odd index
// create an empty string
// loop over each character
// turn all even characters lowercased and add it to the empty string
// turn all odd characters uppercased and add it to the empty string
// return the new string

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}
