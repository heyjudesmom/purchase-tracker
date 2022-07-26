var express = require('express');
var router = express.Router();
const purchCtrl = require('../controllers/purchases');
const isLoggedIn = require('../config/auth');

//GET / (index functionality)
router.get('/index', isLoggedIn, purchCtrl.index);

//GET /new
router.get('/new', purchCtrl.new);

//POST / (create functionality)
router.post('/businesses/:id/purchases', purchCtrl.create);

//GET /edit (view edit form)
router.get('/:id/edit', isLoggedIn, purchCtrl.edit);

//PUT /:id (update functionality)
router.put('/:id', purchCtrl.update);

//DELETE /:id (delete functionality)
router.delete('/:id', purchCtrl.delete);
module.exports = router;