/* exported titleCase */

// var conj = ['and', 'or', 'nor', 'but'];
// var art = ['a', 'an', 'the'];
// var prep = ['as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

function titleCase(title) {
  // debugger;
  // var newTitle = '';
  var lowerCased = title.toLowerCase();
  var words = [];
  var word = '';
  var counter = 0;
  for (var i = 0; i < lowerCased.length; i++) {
    word += lowerCased[i]; // adding chars to the empty string
    if (lowerCased[i] === ' ') { // if the current char is a whitespace
      for (var k = counter; k <= i; k++) { //
        words.push(word.trim());
      }
    }
    counter += 1;
  }
  return words;
}
