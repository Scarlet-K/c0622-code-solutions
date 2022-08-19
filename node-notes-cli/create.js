const fs = require('fs');

module.exports = function create(data) {
  const newNote = process.argv[3];
  data.notes[data.nextId] = newNote;
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
    }
  });
};
