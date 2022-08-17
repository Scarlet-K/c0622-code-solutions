const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const operator = process.argv[3];

if (operator === 'plus') {
  const num1 = parseInt(process.argv[2]);
  const num2 = parseInt(process.argv[4]);
  console.log('result:', add(num1, num2));
}

if (operator === 'minus') {
  const num1 = parseInt(process.argv[2]);
  const num2 = parseInt(process.argv[4]);
  console.log('result:', subtract(num1, num2));
}

if (operator === 'over') {
  const num1 = parseInt(process.argv[2]);
  const num2 = parseInt(process.argv[4]);
  console.log('result:', divide(num1, num2));
}

if (operator === 'times') {
  const num1 = parseInt(process.argv[2]);
  const num2 = parseInt(process.argv[4]);
  console.log('result:', multiply(num1, num2));
}
