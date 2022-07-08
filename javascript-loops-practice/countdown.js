/* exported countdown */

// 5, 4, 3, 2, 1, 0
// for each number from the input number to zero:
// store the current number
// decrement current number by 1
// return ALL stored numbers

function countdown(number) {
  var array = [];
  for (var i = number; i >= 0; i--) {
    array.push(i);
  }
  return array;
}
