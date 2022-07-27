const Purchase = require('../models/purchase');
const Business = require('../models/business');
const User = require('../models/user');

module.exports = {
    index,
    new: newPurch,
    create, 
    edit,
    update: updatePurch,
    delete: deletePurch
}

function index(req, res) {
    Purchase.find({user: req.user._id}).populate('business').exec(
        function(err, purchases) {
        res.render('purchases', { purchases, title: 'Purchases'})
    })
}

function newPurch(req, res) {
    Business.find({user: req.user._id}, function(err, businesses, ) {
        res.render('purchases/new', { businesses, title: 'New Purchase'})
    });
}

function create(req, res) {
    req.body.recommend = !!req.body.recommend;
    const purchase = new Purchase(req.body);
    purchase.user = req.user._id;
    purchase.firstName = req.user.firstName;
    purchase.userAvatar = req.user.avatar;
    purchase.business = req.body.businessId;
    // Business.findById(req.body.businessId, function(err, business) {
    //     business.purchases.push(req.body)
// });
    purchase.save(function(err) {
        if(err) return res.redirect('/purchases/new');
        res.redirect('/purchases');
    });
}

function edit(req, res) {
    Purchase.findOne({'_id': req.params.id}, function(err, purchase) {
        if(err || !purchase) return res.redirect('/');
        res.render('purchases/edit', {title: 'Edit', purchase})
    })    
}

function updatePurch(req, res) {
    Purchase.findOneAndUpdate(
        {_id: req.params.id, user: req.user._id}, 
        req.body, 
        {new: true}, 
        function(err, purchase) {
            if (err) return res.redirect('/purchases/<%=purchase._id%>/edit');
            res.redirect('/purchases')
        }
    )
}

function deletePurch(req, res) {
    Purchase.findOneAndDelete(
        {_id:req.params.id, user: req.user._id}, function(err) {
            res.redirect('/purchases');
        }
    );
}