const Business = require('../models/business');
const purchases = require('./purchases');

module.exports = {
    index, 
    new: newBiz, 
    create, 
    show
}

function index(req, res) {
    Business.find({}, function(err, businesses){
        res.render('businesses/index', {title: 'Businesses', businesses})
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
        res.redirect('/businesses/index');
    })
}

function show(req, res) {
    Business.findById(req.params.id, function(err, business) {
        res.render('businesses/show', {title: 'Details', business})

    })
}