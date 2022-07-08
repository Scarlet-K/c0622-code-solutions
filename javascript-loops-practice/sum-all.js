/* exported sumAll */

// [3, 2, 1]
// the initial sum value is the sum of the first and second number inside the array
// starting from the third number
// add each number to the sum
// after adding the last number to the sum
// return sum

function sumAll(numbers) {
  var sum = numbers[0] + numbers[1];
  for (var i = 2; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
