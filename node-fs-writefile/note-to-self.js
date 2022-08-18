const fs = require('fs');
let data = '';
for (var i = 2; i < process.argv.length; i++) {
  data += (process.argv[i] + '\n');
}

fs.writeFile('note.txt', data, err => {
  if (err) throw err;
});
