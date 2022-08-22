/* exported intersection */

// create an empty array
// grab the first item in the first array
// check if the second array has the first item until the end of the second array
// if there is a match, push it into the empty array and stop
// else continue until the end of the second array

function intersection(first, second) {
  var interArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var k = 0; k < second.length; k++) {
      if (first[i] === second[k]) {
        interArray.push(first[i]);
        break;
      } else if ((first[i] !== second[k]) && (k !== second.length - 1)) {
        continue;
      }
    }
  }
  return interArray;
}
