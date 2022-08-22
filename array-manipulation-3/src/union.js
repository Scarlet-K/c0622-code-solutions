/* exported union */

// create an empty array
// combine the first and second array into one giant totalArray
// go over the items of the totalArray
// if the empty array doesn't include the item from the totalArray
// push the current totalArray's item into the empty array
// return the empty array

function union(first, second) {
  var totalArray = [];
  var finalArray = [];
  for (var i = 0; i < first.length; i++) {
    totalArray.push(first[i]);
  }
  for (var k = 0; k < second.length; k++) {
    totalArray.push(second[k]);
  }
  for (var z = 0; z < totalArray.length; z++) {
    if (!finalArray.includes(totalArray[z])) {
      finalArray.push(totalArray[z]);
    }
  }
  return finalArray;
}
