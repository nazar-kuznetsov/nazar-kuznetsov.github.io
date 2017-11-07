let path = require('path');

module.exports = function (req, res) {
  if (req.body.name.length < 5) {
    res.sendFile(path.resolve(__dirname + '/../public/eror-friend.html'));
  }
};