var express = require('express');
var router = express.Router();

var cors = require('cors')
var jwt = require('jsonwebtoken');

var users = require('./../users');
var messages = require('./../messages');

const SECRET = 'PENTWI09';

router.use(cors());

router.post('/login', function(req, res) {
  var params = {
    username: req.body.username,
    password: req.body.password
  };

  var user = users[params.username];

  if (!user) {
    res.status(404).json({ success: false, token: null });
    return;
  }

  if (user.password !== params.password) {
    res.status(401).json({ success: false, token: null });
    return;
  }

  var token = jwt.sign(params, SECRET, { expiresIn: '1h' });

  res.json({ success: true, token: token });
});

router.use(function(req, res, next) {
  var token = req.header('Authorization').split(/\s+/)[1];
  jwt.verify(token, SECRET, function(err, decoded) {
    if (err) {
      res.status(401).json({ error: 'Unauthorized request' });
      return;
    }
    return next();
  });
});

router.get('/messages', function(req, res) {
  res.json(messages);
})

module.exports = router;
