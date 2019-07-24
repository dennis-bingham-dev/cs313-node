function getGroups(req, res) {
  res.status(200)
  res.json({message: 'attempt to get groups', app: 'Activity Tracker'});
};

function addGroups(req, res) {
  res.status(200)
  res.json({message: 'attempt to create a group', app: 'Activity Tracker'});
};

module.exports = {
  getGroups: getGroups,
  addGroups: addGroups
}
