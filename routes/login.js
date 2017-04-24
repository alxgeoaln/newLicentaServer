var router = require('express').Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var passportService = require('../services/passport');
var requireLogin = passport.authenticate('local', {session: false});
var authController = require('../controller/authController');

router.route('/').post([requireLogin,authController.signin]);

module.exports = router;