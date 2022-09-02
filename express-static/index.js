const express = require('express');
const path = require('path');

const app = express();
const joined = path.join(__dirname, 'public');
console.log('joined:', joined);
const server = express.static('public');
console.log('server:', server);

app.use(server);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
