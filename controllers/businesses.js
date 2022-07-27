const Business = require('../models/business');
const Purchase = require('../models/purchase');

module.exports = {
    index, 
    new: newBiz, 
    create, 
    show
}

function index(req, res) {
    Business.find({user: req.user._id}, function(err, businesses){
        res.render('businesses/index', { title: 'Where I Shop', businesses })
    })
}

function newBiz(req, res) {
    res.render('businesses/new', { title: 'New Business'})
}

function create(req, res) {
    const business = new Business(req.body);
    business.user = req.user._id;
    business.save(function(err) {
        if(err) return res.redirect('/businesses/new');
        res.redirect('/businesses');
    })
}

function show(req, res) {
    Business.findById(req.params.id)
    .populate('purchases')
    .exec(function(err, business, purchases) {
        res.render('businesses/show', {title: 'Details', business, purchases})
    })
}