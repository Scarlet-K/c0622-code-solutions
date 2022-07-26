/* exported isAnagram */

// create a new string that omits spaces
// loop over the firstString
// check if the current index of firstString appears anywhere in the second string
//
// function isAnagram(firstString, secondString) {
//   debugger;
//   var newfirstString = firstString.replaceAll(' ', '');
//   var newsecondString = secondString.replaceAll(' ', '');
//   for (var i = 0; i < newfirstString.length; i++) {
//     for (var k = 0; k < newsecondString.length; k++) {
//       if (newsecondString[i] !== newfirstString[k]) {
//         continue;
//       } else {
//         newfirstString.replace(newfirstString[k], '');
//         break;
//       }
//     }
//   }
//   if (newfirstString === '') {
//     return true + newfirstString;
//   } else {
//     return false + newfirstString;
//   }
// }
