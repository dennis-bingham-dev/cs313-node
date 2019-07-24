require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function loginAUser(email, password, callback) {
  let results;
  pool.connect();
  var sql = `SELECT user_id, username FROM users WHERE email = '${email}'`
  pool.query(sql, async (err, res) => {
    if (err) {
      console.log("Error in query: ");
      return console.log(err);
      }

    console.log('Back from DB with result: ');
    for (let row of res.rows) {
      console.log(JSON.stringify(row.user_id));
      console.log(JSON.stringify(row.username));
      callback(await authenticateUser(row.user_id, password));
      console.log(results);
    }
  });
  //callback(results);
}

function authenticateUser(id, password) {
  console.log(`Logging id in authenticateUser: ${id}`);
  pool.connect();
  var sql = `SELECT user_password FROM users WHERE user_id = ${id}`;
  pool.query(sql, async (err, res) => {
    if (err) {
      console.log("Error in query: ");
      return console.log(err);
      }

    console.log('Back from DB with results');
    for (let row of res.rows) {
      if (row.user_password === password) {
        const token = await jwt.sign({id: id}, process.env.TOKEN_SECRET, { expiresIn: '7d' });
        return token;
      } else {
        return console.log(err);
      }
    }
  });
}

module.exports = {
  loginAUser : loginAUser
}
