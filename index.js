// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  next();
});

// Echo API route
app.all('/*', (req, res) => {
  const responseData = {
    method: req.method,
    url: req.url,
    headers: req.headers,
    body: req.body,
  };
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

