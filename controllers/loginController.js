const loginModel = require('../models/loginModel');

function getLogin(req, res) {
  res.render('pages/login');
};

function userLogin (req, res) {
  if (req.query.email === undefined || req.query.pwd === undefined) {
    // console.log(`Email: ${req.body.email}`);
    // console.log(`PWD: ${req.body.pwd}`);
    loginModel.loginAUser(req.body.email, req.body.pwd, (err, results) => {
      if (err) {
        return console.log(err);
      } else {
        // console.log(results);
        res.render('pages/login');
      }
    });
  } else {
    // console.log(`Email: ${req.query.email}`);
    // console.log(`PWD: ${req.query.pwd}`);
    loginModel.loginAUser(req.query.email, req.query.pwd, (err, results) => {
      if (err) {
        return console.log(err);
      } else {
        // console.log(results);
        res.render('pages/login');
      }
    });
  }
};

module.exports = {
  getLogin: getLogin,
  userLogin: userLogin
}
