/* exported equal */

// Check if the value of the index at the first array matches the value of the index at the second array
// If it matches, continue the checking until the last index and log true
// Else, log false and stop checking

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
