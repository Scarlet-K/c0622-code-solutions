/* exported chunk */

// create an empty array called outer array
// create a empty array called inner array
// the first loop starts at the first character
// at each iteration push the current character into the outer array
// the first loop stops at the last character within the size
// the second loop starts where the outer loop stopped
// at each iteration pus the current character into the inner array
// the second loop stops at the last character of the entire array
// push the inner array into the outer array

// function chunk(array, size) {
//   debugger;
//   var result = [];
//   var outerArray = [];
//   for (var i = 0; i < array.length; i++) {
//     var trueArray = array[i];
//     result.push(trueArray);
//     if (trueArray.length < size) {
//       continue;
//     } else {
//       break;
//     }
//   }
//   return result;
// }

// slice at size
// push into array
// push remainder into remainder array

// function chunk(array, size) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i + size) {
//     newArray.push(array.slice(array[i], size));
//   }
//   return newArray;
// }
