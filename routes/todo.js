var router = require('express').Router();
var passport = require('passport');
var requireAuth = passport.authenticate('jwt', {session: false});
var User = require('../models/user');

router.post('/', function (req, res) {

    var userId = Object(req.body.userId);
    var todo = {
        text: req.body.text,
        userId: req.body.userId
    };

    User.saveTodo(userId, todo, function (err, todo) {
        if (err)
            console.log(err);
        else
            res.json({success: true, message: 'Successfully added todo'});
    })
});

module.exports = router;