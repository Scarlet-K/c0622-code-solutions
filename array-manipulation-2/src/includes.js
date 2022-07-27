/* exported includes */

// loop over the array
// create a conditional statement to check if the value at the current index = value
// if the result of the condition expression is true, return true
// if the result of the coniditon expression is false, return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
