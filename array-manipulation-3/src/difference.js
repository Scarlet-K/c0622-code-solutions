/* exported difference */

// create an empty array
// grab the first array's first item
// compare it with all the items in the second array
// if there is a match end stop
// grab the first array's second item
// if there is no match after checking the last item in the second array
// push the first array's current item into the empty array
// repeat this process for the second array
// return the empty array

function difference(first, second) {
  var diffArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var k = 0; k < second.length; k++) {
      if (first[i] === second[k]) {
        break;
      } else if (k === second.length - 1) {
        diffArray.push(first[i]);
      }
    }
  }
  for (var j = 0; j < second.length; j++) {
    for (var m = 0; m < first.length; m++) {
      if (second[j] === first[m]) {
        break;
      } else if (m === first.length - 1) {
        diffArray.push(second[j]);
      }
    }
  }
  return diffArray;
}
