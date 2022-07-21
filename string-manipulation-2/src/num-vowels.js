/* exported numVowels */

// create an array of all vowels [a , e, i , o , u]
// create a variable to track count and assign it number zero
// create an outer loop to loop over each vowel
// create an inner loop to loop over all the characters in the string
// the nested loop will let us compare the current vowel with all the characters in the string BEFORE moving on to the next vowel
// if there is a match, increment the total
// when the inner loops' condition is not met = the counter variable exceeds the length of the string
// the inner loop terminates
// the outer loop's final expression increments the counter variable = move on to the next vowel
// repeat the process of comparing one vowel to all characters

function numVowels(string) {
  var total = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    for (var s = 0; s < string.length; s++) {
      if (string[s].toLowerCase() === vowels[i].toLowerCase()) {
        total++;
      }
    }
  }
  return total;
}
