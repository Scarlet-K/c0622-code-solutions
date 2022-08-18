const fs = require('fs');
const path = process.argv[2];
let data = '';
const newFile = process.argv[3];
fs.readFile(path, 'utf8', (err, text) => {
  if (err) throw err;
  data += text;
  // console.log(data);
});

fs.writeFile(newFile, data, err => {
  if (err) throw err;
});
