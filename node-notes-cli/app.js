const data = require('./data.json');
const fs = require('fs');
const operation = process.argv[2];

if (operation === 'read') {
  for (const ids in data.notes) {
    const stringData = ids.toString() + ': ' + data.notes[ids];
    console.log(stringData);
  }
} else if (operation === 'create') {
  const newNote = process.argv[3];
  data.notes[data.nextId] = newNote;
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
    }
  });
} else if (operation === 'delete') {
  for (const id in data.notes) {
    if (process.argv[3] === id) {
      delete data.notes[id];
      fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
        if (err) {
          console.error(err);
        }
      });
    }
  }
} else if (operation === 'update') {
  for (const idU in data.notes) {
    if (process.argv[3] === idU) {
      data.notes[idU] = process.argv[4];
      fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
        if (err) {
          console.error(err);
        }
      });
    }
  }
}
