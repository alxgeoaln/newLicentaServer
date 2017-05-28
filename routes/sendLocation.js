var router = require('express').Router();
var User = require('../models/user');
var Location = require('../models/location');
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
    const lng = req.body.lon;
    const address = req.body.address;

    //#region Get current Date
    var date = new Date();
    const currentDate = date.setUTCHours(2);
    //endregion

    //#region Get current time
    var thisTime = date.getTime() / 1000;
    //endregion


    User.findUserId(userId, function (err, user) {
        if (err) {
            console.log(err)
        } else {
            var userEmail = user.email;
            var name = user.name;
            var contacts = user.contact;
            var emails = contacts.map(function (email) {
                return email.email
            });
            const location = new Location({
                lat: lat,
                lng: lng,
                address: address,
                author: name,
                createdAt: currentDate,
                time: thisTime
            });

            Location.saveLocation(location, function (err, thisLocation) {
                if (err) console.log(err);
                //#region Send mail to contacts
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'georgianalinalexandru@gmail.com',
                        pass: 'mcwtuyokzmn1'
                    }
                });
                const mailOptions = {
                    from: userEmail, // sender address
                    to: emails, // list of receivers
                    subject: 'Licenta', // Subject line
                    html: '<style></style><h1>Licenta</h1><p>' + name + ' a facut accident la aceasta adresa: <b>' + address + '</b> </p>' // html body
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        return console.log(error)
                    }
                });
                //endregions
                res.json({success: true, message: 'Location has been successfully posted'});
            });


        }
    })
});

module.exports = router;