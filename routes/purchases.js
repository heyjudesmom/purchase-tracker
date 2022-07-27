var express = require('express');
var router = express.Router();
const purchCtrl = require('../controllers/purchases');
const isLoggedIn = require('../config/auth');

router.get('/purchases', isLoggedIn, purchCtrl.index);

router.get('/purchases/new', purchCtrl.new);

router.post('/purchases', isLoggedIn, purchCtrl.create);

router.get('/purchases/:id/edit', isLoggedIn, purchCtrl.edit);

router.put('/:id', purchCtrl.update);

router.delete('/:id', isLoggedIn, purchCtrl.delete);

module.exports = router;