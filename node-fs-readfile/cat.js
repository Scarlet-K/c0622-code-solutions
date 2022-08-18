const fs = require('fs');
let result = '';

console.log(process.argv);

for (var i = 2; i < process.argv.length; i++) {
  fs.readFile(process.argv[i], 'utf8', (err, buffer) => {
    if (err) throw err;
    result += buffer;
    console.log(result);
  });
}

// String.fromCharCode
// .toString()
