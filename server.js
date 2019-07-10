require('dotenv').config();
const { Pool } = require('pg');
const express = require('express');
const app = express();
const http = require('http');
app.set('view engine', 'ejs');
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({extended: true})); // support url encoded bodies
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});
pool.connect();
var sql = 'SELECT * FROM users';
pool.query(sql, (err, result) => {
	if (err) {
		console.log("Error in query: ");
		 return console.log(err);
    }

	console.log('Back from DB with result: ');
	for (let row of result.rows) {
    console.log(JSON.stringify(row.user_id));
  }

  pool.end();
});

let PORT = process.env.PORT || 8000;

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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);

  setInterval(() => {
    http.get('https://mission-bend-activity-tracker.herokuapp.com/');
  }, 300000);
});
