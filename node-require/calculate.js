const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const operator = process.argv[3];
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);

if (operator === 'plus') {
  console.log('result:', add(num1, num2));
} else if (operator === 'minus') {
  console.log('result:', subtract(num1, num2));
} else if (operator === 'over') {
  console.log('result:', divide(num1, num2));
} else if (operator === 'times') {
  console.log('result:', multiply(num1, num2));
} else {
  console.log('invalid operation');
}
