require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
});

function registerUser(fname, lname, email, password, callback) {
  let results;
  pool.connect();
  var select = `SELECT * FROM users WHERE email = '${email}'`
  pool.query(select, (err, res) => {
    if (err) {
      console.log("Error in query: ");
      return console.log(err);
      }
      for (row in res.rows) {
        if (row.email !== null || row.email !== undefined || row.email !== '') {
          callback('Already exists in the DB');
        } else {
          var sql = `INSERT INTO users
            (fName
            , lName
            , email
            , user_password)
            VALUES
            ('${fname}'
            , '${lname}'
            , '${email}'
            , '${password}')`
    pool.query(sql, (err, res) => {
      if (err) {
        console.log("Error in query: ");
        return console.log(err);
        }
        console.log('Inserted into db');
  });
        }
      }
  });

  callback('success');
}
module.exports = {
  registerUser : registerUser
}
