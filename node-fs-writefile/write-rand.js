const fs = require('fs');
const data = Math.random().toString() + '\n';

// const randomNumber = Math.random();

fs.writeFile('random.txt', data, err => {
  if (err) throw err;
});

// fs.writeFile('random.txt', randomNumber + '\n', 'utf8', err => {
//   if (err) {
//     console.error(err);
//     process.exit(1);
//   }
// });
