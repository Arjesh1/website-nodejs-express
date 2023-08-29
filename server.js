const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './provided/static')));

app.get('/', (req, res) => {
  res.render('pages/index', { pageTitle: 'Welcome' });
});

app.get('/speakers', (req, res) => {
  res.sendFile(path.join(__dirname, './provided/static/speakers.html'));
});

app.listen(port, () => {
  console.log(`This is running in port ${port} `);
});
