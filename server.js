const express = require('express');
const app = express();
app.set('view engine', 'ejs');
let port = process.env.PORT;
if (port === null || port === "" || port === undefined) {
  port = 8000;
}

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/signup', (req, res) => {
  res.render('pages/signup');
});

app.get('/login', (req, res) => {
  res.render('pages/login');
});

app.get('/forgotpassword', (req, res) => {
  res.render('pages/forgotpassword');
});

app.listen(port);
console.log(`Server listening on port ${port}...`);

setInterval(() => {
  console.log(`Server listening on port ${port}...`);
}, 10000);
