/* exported capitalizeWords */

// every first character of a word is uppercase
// the first word's first character is always at index 0
// every next word starts after a space
// every next word's first character is always after space
// cut the string after a space
// attach the uppercased first character of the new word that comes after the space
//

// function capitalizeWords(string) {
//   var firstChar1 = string[0].toUpperCase();
//   // newString = 'N'
//   for (var i = 1; i < string.length; i++) {
//     if (string[i] !== ' ') {
//       firstChar1 += string[i];
//       // newString = 'Needssolution'
//     } else {
//       firstChar1 += string[i + 1].toUpperCase();
//       // newString = 'NeedsSsolution'
//     }
//   }
//   return firstChar1;
// }

function capitalizeWords(string) {
  var firstChar1 = string[0].toUpperCase();
  // newString = 'N'
  for (var i = 1; i < string.length; i++) {
    firstChar1 += string[i];
    if (string[i] === ' ') {
      firstChar1 += string[i + 1].toUpperCase();
      return firstChar1;
    }
  }
  return firstChar1;
}
