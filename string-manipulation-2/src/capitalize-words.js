/* exported capitalizeWords */

// upperCase and lowerCase returns what is changed
// slice returns what is sliced
//

// add each character lowercased as long as it isn't after a space
// check if a characters is a space
// if the characters is a space

// function capitalizeWords(string) {
//   var firstChar1 = string[0].toUpperCase();
//   var sliced = '';
//   for (var i = 1; i < string.length; i++) {
//     if (string[i] === ' ') {
//       for (var k = 0; k < firstChar1.length; k++) {
//         if (string[k] === ' ') {
//           sliced += string.slice(k, k + 2).toUpperCase();
//           break;
//         }
//       }
//     } else {
//       firstChar1 += string[i].toLowerCase();
//     }
//     firstChar1 += sliced;
//   }
//   return firstChar1;
// }
