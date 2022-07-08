/* exported filterOutStrings */
function filterOutStrings(values) {
  var exceptString = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== typeof 'a') {
      exceptString.push(values[i]);
    }
  }
  return exceptString;
}
