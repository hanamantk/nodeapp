var express = require('express');
var router = express.Router();
var users =require('../model/users');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.render('users',{users:users});
});

module.exports = router;
