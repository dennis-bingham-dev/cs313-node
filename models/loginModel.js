require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function loginAUser(email, password, callback) {
  let results = '';
  let id = 0;
  let pwd = '';
  pool.connect();
  var sql = `SELECT user_id, username FROM users WHERE email = '${email}'`
  pool.query(sql, (err, res) => {
    if (err) {
      console.log("Error in query: ");
      return console.log(err);
      }

    console.log('Back from DB with result: ');
    for (let row of res.rows) {
      console.log(JSON.stringify(row.user_id));
      console.log(JSON.stringify(row.username));
      results = JSON.stringify(row);
      // console.log(JSON.stringify(row.user_id));
        // console.log(JSON.stringify(row.user_password));
        // id = row.user_id;
        // pwd = JSON.stringify(row.user_password);
    }
  });
  callback(results);
}

module.exports = {
  loginAUser : loginAUser
}
