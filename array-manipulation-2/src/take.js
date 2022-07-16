/* exported take */

// create new empty array
// loop over the array
// start at the first index
// push the item into a new array
// stop when the counter var is less than the count
// return new array

// function take(array, count) {
//   var newArray = [];
//   for (var i = 0; i < count; i++) {
//     if (array[i] !== undefined) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

function take(array, count) {
  return array.slice(0, count);
}
