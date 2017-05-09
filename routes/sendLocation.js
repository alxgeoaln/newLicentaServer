var router = require('express').Router();
var User = require('../models/user');
var jwt = require('jwt-simple');
var config = require('../config');
var passport = require('passport');
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
                subject: 'Works', // Subject line
                html: 'muie<b>kur</b> <a>www.pornhub.com</a>' // html body
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