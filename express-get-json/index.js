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

// app.use((req, res, next) => {
//   if (req.method !== 'GET' || req.url !== '/api/grades') {
//     next();
//   } else {
//     const gradesArray = [];
//     for (const id in grades) {
//       gradeArray.push(grades[id]);
//     }
//     res.json(gradeArray);
//   }
// });
// above function is the same as the below function, just longer

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const id in grades) {
    gradeArray.push(grades[id]);
  }
  res.json(gradeArray);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000!');
});
