function resetPassword(req, res) {
  res.render('pages/forgotpassword');
};

module.exports = {
  resetPassword : resetPassword
}
