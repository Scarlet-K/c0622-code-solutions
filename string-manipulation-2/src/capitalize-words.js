/* exported capitalizeWords */

// every first character of a word is uppercase
// the first word's first character is always at index 0
// every next word starts after a space
// every next word's first character is always after space
// cut the string after a space = slice
// attach the uppercased first character of the new word that comes after the space
//

// the outer loop goes through the string and concatenates to the firstChar until it hits a space
// if the current characters is a space, slice the string at the space
// else
// the inner loop concatenates the character after the space to the firstChar
// stop at next char

function capitalizeWords(string) {
  var firstChar1 = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    firstChar1 += string[i].toLowerCase();
    if (string[i] === ' ') {
      firstChar1 += string.slice(i);
    }
  }
  return firstChar1;
}

// function capitalizeWords(string) {
//   var firstChar1 = string[0].toUpperCase();
//   for (var i = 1; i < string.length; i++) {
//     firstChar1 += string[i].toLowerCase();
//     if (string[i] === ' ') {
//       firstChar1 += string.slice(i + 1, i + 2).toUpperCase();
//     }
//   }
//   return firstChar1;
// }
