const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, the server a work!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${3306}`);
});
