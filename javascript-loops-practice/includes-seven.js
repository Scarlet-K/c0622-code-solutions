/* exported includesSeven */
function includesSeven(array) {
  var yesSeven = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      yesSeven = true;
    }
  }
  return yesSeven;
}
