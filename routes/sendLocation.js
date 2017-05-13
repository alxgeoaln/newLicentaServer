var router = require('express').Router();
var User = require('../models/user');
var jwt = require('jwt-simple');
var config = require('../config');
var passport = require('passport');
var util = require('util');
var requireAuth = passport.authenticate('jwt', {session: false});
const nodemailer = require('nodemailer');

function tokenForUser(user) {
    var timeStamp = new Date().getTime();
    return jwt.encode({
        sub: user.id,
        iat: timeStamp
    }, config.secret)
}

router.post('/sendEmail', requireAuth, function (req, res) {
    const userId = req.user._id;
    const lat = req.body.lat;
    const long = req.body.lon;

    const address = req.body.address;
    User.findUserId(userId, function (err, user) {
        if (err) {
            console.log(err)
        } else {
            var contacts = user.phoneNumber;
            var emails = contacts.map(function (email) {
                return email.number
            });
            res.json(emails)
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'georgianalinalexandru@gmail.com',
                    pass: 'mcwtuyokzmn1'
                }
            });
            const mailOptions = {
                from: 'Georgian <georgianalinalexandru@gmail.com>', // sender address
                to: emails, // list of receivers
                subject: 'Licenta', // Subject line
                html: '<p>Am facut accident la aceasta adresa: <b>"'+ address +'"</b> </p>' // html body
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return console.log(error)
                }
                console.log('Message %s sent: %s', info.messageId, info.response);
            })
        }
    })
});

module.exports = router;