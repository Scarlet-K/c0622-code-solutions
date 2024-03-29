const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const id in grades) {
    gradeArray.push(grades[id]);
  }
  res.json(gradeArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  nextId++;
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201).send(grades[nextId]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
