var colors = ['red', 'white', 'blue'];
console.log('Value of colors[0]:', colors[0]);
console.log('Value of colors[1]:', colors[1]);
console.log('Value of colors[2]:', colors[2]);
var str = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(str);
colors[2] = 'green';
var newStr = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(newStr);
console.log('Value of colors:', colors);

var students = ['Bob', 'Kevin', 'Sara', 'Mark'];
var numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' students in the class.');
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student in the array is ' + lastStudent + '.');
console.log('Value of students:', students);
