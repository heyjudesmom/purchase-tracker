var express = require('express');
var router = express.Router();
const bizCtrl = require('../controllers/businesses');
const isLoggedIn = require('../config/auth');

router.get('/', bizCtrl.index);

router.get('/new', bizCtrl.new);

router.post('/', bizCtrl.create);

router.get('/:id', bizCtrl.show);

module.exports = router