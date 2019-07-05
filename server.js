/* DATABASE_URL='postgres://mlralkpqqmnzjd:ce55a91966f89490ca3e143a2a1229733a9a5daa5baf597093a1acf753d6f556@ec2-174-129-227-80.compute-1.amazonaws.com:5432/d3j5ia4jgmtgt4' */
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
