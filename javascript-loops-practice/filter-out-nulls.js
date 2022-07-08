/* exported filterOutNulls */
function filterOutNulls(values) {
  var exceptNull = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i]) {
      exceptNull.push(values[i]);
    }
  }
  return exceptNull;
}
