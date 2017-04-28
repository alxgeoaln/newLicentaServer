var router = require('express').Router();
var passport = require('passport');
var passportService = require('../services/passport');
var requireAuth = passport.authenticate('jwt', {session: false})

router.get('/', requireAuth, function (req, res) {
    res.send('Works')
});

module.exports = router;