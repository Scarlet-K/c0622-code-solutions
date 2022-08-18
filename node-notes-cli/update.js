const fs = require('fs');
module.exports = function update(data) {
  data.notes[process.argv[3]] = process.argv[4];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
    }
  });
};
