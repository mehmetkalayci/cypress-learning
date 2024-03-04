var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/interactions-test', function(req, res, next) {
  res.render('interactions-test', { title: 'Interactions Test' });
});


module.exports = router;
