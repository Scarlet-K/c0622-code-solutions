var a = 1;
var b = 2;
var c = 3;
var maximumValue = Math.max(a, b, c);
console.log('Value of maximumValue:', maximumValue);

var heroes = ['batman', 'spiderman', 'ironman', 'mom'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Value of randomHero:', randomHero);

var library = [
  {
    title: 'Little Prince',
    author: 'French Dude'
  },
  {
    title: 'Moby Dick',
    author: 'American Dude'
  },
  {
    title: 'Othello',
    author: 'Shakespeare'
  }
];

var lastBook = library.pop();
console.log('Value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('Value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library:', library);

var fullName = 'Scarlet Kim';
var firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log(sayMyName);
