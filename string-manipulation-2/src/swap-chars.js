/* exported swapChars */

// create a variable with character at firstIndex
// create a variable with character at secondIndex
// loop over the string
// if the index matches the firstIndex

function swapChars(firstIndex, secondIndex, string) {
  var first = [string[firstIndex]];
  var second = [string[secondIndex]];
  var stringArray = [];
  for (var i = 0; i < string.length; i++) {
    stringArray.push(string[i]);
    if (string[i] === string[firstIndex]) {
      stringArray.push(second);
    } else if (string[i] === string[secondIndex]) {
      stringArray.push(first);
    }
  }
  return stringArray.join('');
}
