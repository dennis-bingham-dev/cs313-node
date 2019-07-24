function getRegistered(req, res) {
  res.render('pages/signup');
};

function registerUser(req, res) {
  res.status(200);
  res.json({message: 'User signed up', app: 'Activity Tracker'});
};

module.exports = {
  getRegistered : getRegistered,
  registerUser: registerUser
}
