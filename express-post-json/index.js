const express = require('express');
const app = express();
let nextId = 1;
const grades = {};
const gradeArray = [];

app.get('/api/grades', (req, res) => {
  for (const id in grades) {
    gradeArray.push(grades[id]);
  }
  res.json(gradeArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  nextId++;
  grades.id = nextId;
  grades.name = req.body.name;
  grades.course = req.body.course;
  grades.score = req.body.score;
  res.status(201).send(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
