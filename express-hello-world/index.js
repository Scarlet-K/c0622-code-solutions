const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('<h2>hellooo</h2>');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express is live!');
});
