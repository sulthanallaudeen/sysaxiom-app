var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sysaxiom - Digital Future, Right Away' });
});

module.exports = router;
