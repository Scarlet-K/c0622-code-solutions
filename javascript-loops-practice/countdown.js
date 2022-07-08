/* exported countdown */
// function countdown(number) {
//   var array = [];
//   while (number >= 0) {
//     array.push(number--);
//   }
//   return array;
// }

function countdown(number) {
  var array = [];
  for (var i = number; i >= 0; i--) {
    array.push(i);
  }
  return array;
}
