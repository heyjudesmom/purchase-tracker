var express = require('express');
var router = express.Router();
const purchCtrl = require('../controllers/purchases');
const isLoggedIn = require('../config/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('purchases', { title: 'Local Notion'});
  });
  
//GET / (index functionality)
router.get('/index', isLoggedIn, purchCtrl.index)

//GET /new
router.get('/new', purchCtrl.new);

//POST / (create functionality)
router.post('/', purchCtrl.create)

module.exports = router;