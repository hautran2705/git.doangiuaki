var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('adindex');
  });

  router.get('/adchart', function(req, res, next) {
    res.render('adchart');
  });
  
  router.get('/adtable', function(req, res, next) {
    res.render('adtable');
  });
  module.exports = router;