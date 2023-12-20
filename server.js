const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

// Serve static files from the parent directory (containing assets folder)
app.use(express.static(__dirname));

// Define routes for your HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
