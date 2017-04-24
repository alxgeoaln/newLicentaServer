var router = require('express').Router();
var User = require('../models/user');
var jwt = require('jwt-simple');
var config = require('../config');

function tokenForUser(user) {
    var timeStamp = new Date().getTime();
    return jwt.encode({
        sub: user.id,
        iat: timeStamp
    }, config.secret)
}

router.post('/', function (req, res) {
    const newUser = new User({
        // name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    User.getUserByEmail( newUser.username, function (err, existingUser) {
        if (err) {
            res.json({success: false, message: 'Failed to register user'});
        } else {
            if (existingUser) {
                res.json({success: false, message: 'User already exist'});
            } else {
                User.addUser(newUser, function (err, user) {
                    if (err) {
                        res.json({success: false, message: 'Failed to register user'})
                    } else {
                        res.json({success: true,userId: newUser._id,token: tokenForUser(newUser), message: 'User registerd'})
                    }
                })
            }
        }
    });


});

module.exports = router;