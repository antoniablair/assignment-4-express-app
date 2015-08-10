var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My World' });
});
router.get('/things', function(req, res, next) {
  res.render('index', { title: 'Things' });
});
router.get('/things/new', function(req, res, next) {
  res.render('index', { title: 'Things' });
});
router.get('/people', function(req, res, next) {
  res.render('index', { title: 'People' });
});
router.get('/people/new', function(req, res, next) {
  res.render('index', { title: 'People' });
});

module.exports = router;
