const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

// app.delete('/api/grades/:id', (req, res) => {
//   const id = Number(req.params.id); // simply to check the user's input is a valid ID
//   if (!grades[id]) {
//     res.sendStatus(404);
//   } else {
//     delete grades[id];
//     res.sendStatus(204);
//   }
// });

app.delete('/api/grades/:id', (req, res) => {
  const id = req.params.id;
  if (grades[id]) {
    delete grades[id];
    res.sendStatus(204);
  } else {
    res.sendStatus(400);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
