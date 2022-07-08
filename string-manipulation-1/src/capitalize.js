/* exported capitalize */

// lowercase and store all characters except the first character
// uppercase the first character
// concatenate the uppercased first character with the lowercased characters
// return the result

function capitalize(word) {
  var lowerCased = '';
  for (var i = 1; i < word.length; i++) {
    lowerCased += word[i].toLowerCase();
  }
  return word[0].toUpperCase() + lowerCased;
}
