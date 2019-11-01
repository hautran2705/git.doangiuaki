var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/how', function(req, res, next) {
  res.render('how');
});

router.get('/product', function(req, res, next) {
  res.render('product');
});

router.get('/find', function(req, res, next) {
  res.render('find');
});

module.exports = router;
