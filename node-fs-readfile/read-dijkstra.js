const fs = require('fs');

// fs.readFile('dijkstra.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

fs.readFile('dijkstra.txt', 'utf8', (err, text) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(text);
});
