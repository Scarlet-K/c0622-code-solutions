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
    res.status(400).json({ error: 'id must be a postitive integer' });
    return;
  }
  if (data.notes[id]) {
    res.status(200).json(data.notes[id]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  req.body.id = data.nextId;
  data.notes[data.nextId] = req.body;
  data.nextId++;
  const newData = JSON.stringify(data, null, '  ');
  fs.writeFile('data.json', newData, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    } else {
      res.status(201).json(data.notes[req.body.id]);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (!Number.isInteger(id) && id < 0) {
    res.status(400).json({ error: 'id must be a postitive integer' });
    return;
  }
  if (data.notes[id]) {
    delete data.notes[id];
    const newData = JSON.stringify(data, null, '  ');
    fs.writeFile('data.json', newData, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      }
      res.status(204).send();
    });
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (!Number.isInteger(id) && id < 0) {
    res.status(400).json({ error: 'id must be a postitive integer' });
    return;
  } else if (data.notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
    return;
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  req.body.id = parseInt(id);
  data.notes[id] = req.body;
  const newData = JSON.stringify(data, null, '  ');
  fs.writeFile('data.json', newData, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    } else {
      res.status(200).json(data.notes[req.body.id]);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
