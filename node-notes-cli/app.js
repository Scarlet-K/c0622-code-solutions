const data = require('./data.json');
const create = require('./create');
const remove = require('./remove');
const update = require('./update');
const operation = process.argv[2];

if (operation === 'read') {
  for (const ids in data.notes) {
    const stringData = ids.toString() + ': ' + data.notes[ids];
    console.log(stringData);
  }
} else if (operation === 'create') {
  create(data);
} else if (operation === 'delete') {
  remove(data);
} else if (operation === 'update') {
  update(data);
}
