var router = require('express').Router();
var passport = require('passport');
var passportService = require('../services/passport');
var requireAuth = passport.authenticate('jwt', {session: false})

router.get('/', function (req, res) {
   res.json({message: works})
});

module.exports = router;