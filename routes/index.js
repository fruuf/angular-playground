var express = require('express');
var router = express.Router();


// since we want to build a single page application we only need to serve one file! :)
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
