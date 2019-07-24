function getPosts(req, res) {
  res.status(200)
  res.json({message: 'attempte to get posts', app: 'Activity Tracker'});
};

function addPost(req, res) {
  res.status(200)
  res.json({message: 'attempt to add posts', app: 'Activity Tracker'});
};

module.exports = {
  getPosts: getPosts,
  addPost: addPost
}
