/* exported oddOrEven */

// return an array with strings that describe the numbers as odd/even
// store the strings inside an array
// for each number:
// check if it is dividible by two with no remainders (%)
// if yes, push the word 'even' inside the new array
// if no, push the word 'odd' inside the new array
// return the new array

function oddOrEven(numbers) {
  var newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}
