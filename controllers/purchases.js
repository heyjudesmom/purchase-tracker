const Purchase = require('../models/purchase');
const Business = require('../models/business');

module.exports = {
    index,
    new: newPurch,
    create, 
    
}

function newPurch(req, res) {
    Business.find({}, function(err, businesses) {
        res.render('purchases/new', { businesses, title: 'New Purchase' })
    });
}

function create(req, res) {
    req.body.recommend = !!req.body.recommend;
    const purchase = new Purchase(req.body);
    purchase.user = req.user._id;
    purchase.firstName = req.user.firstName;
    purchase.userAvatar = req.user.avatar;
    purchase.save(function(err) {
        return res.redirect('/purchases/new')
    })
    res.redirect('/purchases/index')
}

function index(req, res) {
    // Promise.resolve().then(function() {
    //     return Purchase.find({amount})
    //     .then(function(results) {
    //         let total = 0;
    //         results.forEach(function(doc) {
    //             return total += results.amount.value
    //         });
    //         process.exit();
    //     })
    // })
    Purchase.find({}, function(err, purchases) {
        res.render('purchases', { purchases, title: 'Purchases' })
    })
}