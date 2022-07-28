var express = require('express');
var router = express.Router();
const passport = require('passport');
const purchCtrl = require('../controllers/purchases');
const isLoggedIn = require('../config/auth');

// router.get('/', function(req, res, next) {
//   res.render('home', { title: 'Local Notion', purchases });
// });
router.get('/', purchCtrl.findAll);

//Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));
// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));
// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
