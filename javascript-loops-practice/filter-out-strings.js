/* exported filterOutStrings */

// store values that are not a type of string

function filterOutStrings(values) {
  var exceptString = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      exceptString.push(values[i]);
    }
  }
  return exceptString;
}
