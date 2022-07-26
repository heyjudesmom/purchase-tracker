var express = require('express');
var router = express.Router();
const bizCtrl = require('../controllers/businesses');
const isLoggedIn = require('../config/auth');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('businesses', { title: 'Where I Shop'});
  });
  
// GET / index functionality
router.get('/index', bizCtrl.index);

//GET /new new functionality
router.get('/new', bizCtrl.new);

//POST / create functionality
router.post('/index', bizCtrl.create);

//GET /:id show functionality
router.get('/:id', bizCtrl.show);

module.exports = router