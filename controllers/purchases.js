const Purchase = require('../models/purchase');

module.exports = {
    index,
    new: newPurch,
    create, 
}

function newPurch(req, res) {
    res.render('purchases/new', { title: 'New Purchase' })
}

function create(req, res) {
    req.body.recommend = !!req.body.recommend;
    const purchase = new Purchase(req.body);
    purchase.user = req.user._id;
    purchase.save(function(err) {
        if (err) console.log(err) 
        return res.redirect('/purchases/new')
    })
    res.redirect('/purchases')
}

function index() {
    Purchase.find({}, function(err, purchases) {
        res.render('purchases/index', { title: 'Purchases', purchases })
    })
}