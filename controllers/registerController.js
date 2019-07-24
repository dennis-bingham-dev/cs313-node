const registerModel = require('../models/registerModel');

function getRegistered(req, res) {
  res.render('pages/signup');
};

function registerUser(req, res) {
  if (req.query.fname === undefined ||
      req.query.lname === undefined ||
      req.query.email === undefined ||
      req.query.pwd === undefined   ||
      req.query.cpwd === undefined) {
    // console.log(`Email: ${req.body.email}`);
    // console.log(`PWD: ${req.body.pwd}`);
    registerModel.registerUser(req.body.fname, req.body.lname, req.body.email, req.body.pwd, (err, results) => {
      if (err) {
        return console.log(err);
      } else {
        console.log(results);
        res.status(200);
        res.json({message: results, app: 'Activity Tracker'});
        res.render('pages/login');
      }
    });
  } else {
    // console.log(`Email: ${req.query.email}`);
    // console.log(`PWD: ${req.query.pwd}`);
    registerModel.registerUser(req.query.fname, req.query.lname, req.query.email, req.query.pwd, (err, results) => {
      if (err) {
        return console.log(err);
      } else {
        console.log(results);
        res.render('pages/login');
        res.status(200);
        res.json({message: results, app: 'Activity Tracker'});
        res.json({message: 'User signed up', app: 'Activity Tracker'});
      }
    });
  }
};

module.exports = {
  getRegistered : getRegistered,
  registerUser: registerUser
}
