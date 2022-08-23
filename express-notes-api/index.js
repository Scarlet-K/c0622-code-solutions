const data = require('./data.json');
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  if (data.notes !== undefined) {
    const dataArray = [];
    for (const id in data.notes) {
      dataArray.push(data.notes[id]);
    }
    res.status(200).send(dataArray);
  } else {
    res.send(data.notes);
  }
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (!Number.isInteger(id) && id < 0) {
    const errNotPositive = { error: `id must be a postitive integer ${id}` };
    res.status(404).json(errNotPositive);
  }
  if (data.notes[id]) {
    res.status(200).json(data.notes[id]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const newNote = {};
  if (req.body.content) {
    newNote.content = req.body.content;
    newNote.id = data.nextId; // { content: saldkfjsfj, id: 11}
    data.notes[data.nextId] = newNote; // made the newNote a property of data
    data.nextId += 1;
    const newData = JSON.stringify(data, null, ' '); // stringifying the new data
    fs.writeFile('boop/data.json', newData, err => { // checking if the file path is valid
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
        delete newData.notes[data.nextId];
        data.nextId -= 1;
      } else {
        // data.notes[data.nextId] = newNote;
        // data.nextId += 1;
        // const newData = JSON.stringify(data, null, ' ');
        res.status(201).json(newNote);
      }
    });
  } else {
    res.status(400).json({ error: 'content is a required field' });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

// {
//   "nextId": 10,
//     "notes": {
//     "2": {
//       "id": 2,
//       "content": "The event loop, this, closures, and prototypal inheritance are special about JavaScript."
//     },
//     "5": {
//       "id": 5,
//       "content": "In JavaScript, the value of `this` is determined when a function is called; not when it is defined."
//     },
//     "6": {
//       "id": 6,
//       "content": "A closure is formed when a function retains access to variables in its lexical scope."
//     },
//     "9": {
//       "id": 9,
//       "content": "Inertia is a property of matter."
//     }
//   }
// }
