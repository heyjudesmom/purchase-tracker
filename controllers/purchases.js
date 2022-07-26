const Purchase = require('../models/purchase');
const Business = require('../models/business');
const { update } = require('../models/user');
const business = require('../models/business');

module.exports = {
    index,
    new: newPurch,
    create, 
    edit,
    update: updatePurch,
    delete: deletePurch
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
    purchase.business = req.body.businessId;
    purchase.save(function(err) {
        if(err) return res.redirect('/new');
        res.redirect('/index');
    })
}

function index(req, res) {
    Purchase.find({}).populate('business').exec(
     function(err, purchases) {
        res.render('purchases/index', { purchases, title: 'Purchases' })
    })
}

function edit(req, res) {
    Purchase.findOne({'_id': req.params.id}, function(err, purchase) {
        if(err || !purchase) return res.redirect('/');
        res.render('purchases/edit', {title: 'Edit', purchase})
    })    
}

function updatePurch(req, res) {
    Purchase.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        {new: true}, 
        function(err, purchase) {
            if (err || !purchase) return res.redirect('/<%=purchase._id%>/edit');
            res.redirect('/index')
        }
    )
}

function deletePurch(req, res) {
Purchase.findOneAndDelete(
    {_id:req.params.id}, function(err) {
        res.redirect('/index');
    }
);
}