/* exported titleCase */

// var minor = [
//   'and', 'or', 'nor', 'but',
//   'a', 'an', 'the',
//   'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'
// ];

function titleCase(title) {
  // var newTitle = '';
  var lowerCased = title.toLowerCase();
  var words = lowerCased.split(' ');
  return words;
}
