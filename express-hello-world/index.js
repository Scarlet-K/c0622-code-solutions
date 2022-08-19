const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('hellooo');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express is live!');
});
