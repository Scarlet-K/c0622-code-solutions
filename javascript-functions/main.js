function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log('Return of convertMinutesToSeconds(20):', convertMinutesToSeconds(20));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
console.log('Return of greet(\'Victor\'):', greet('Victor'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('Return of getArea(2, 3):', getArea(2, 3));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
console.log('Return of getFirstName(\'Smith\'):', getFirstName({ firstName: 'Victor', lastName: 'Smith' }));

function getLastElement(array) {
  var lastElement = array.length - 1;
  return lastElement;
}
console.log('Return of getLastElement([0, 1, 2]):', getLastElement([0, 1, 2]));
