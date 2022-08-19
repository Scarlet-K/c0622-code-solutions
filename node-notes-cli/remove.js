const fs = require('fs');

module.exports = function remove(data) {
  delete data.notes[process.argv[3]];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
    }
  });
};
