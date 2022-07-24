const Purchase = require('../models/purchase');

module.exports = {
    new: newPurch,
    create
}

function newPurch(req, res) {
    res.render('purchases/new', { title: 'New Purchase' })
}

function create(req, res) {

    res.redirect('/purchases')
}