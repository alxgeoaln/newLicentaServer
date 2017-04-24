var passport = require('passport');
var ExtractJwt = require('passport-jwt').ExtractJwt;
var JwtStrategy = require('passport-jwt').Strategy;
var LocalStrategy = require('passport-local');


var User = require('../models/user');
var config = require('../config');

var jwtOptions = {
    secretOrKey: config.secret,
    jwtFromRequest: ExtractJwt.fromHeader('authorization')
};

var localOptions = {
    usernameField: 'email'
};

var jwtStrategy = new JwtStrategy(jwtOptions, function (payload, done) {
    User.findUserId(payload.sub, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false)
        }
    });
});

var localStrategy = new LocalStrategy(localOptions, function (email, password, done) {
    User.getUserByEmail(email, function (err, user) {
        if (err) return done(err);
        if (!user) {
            return done(null, false)
        }
        User.comparePassword(password, user.password, function (err, isMatch) {
            if (err) return done(err);
            if (!isMatch) return done(null, false);
            else {
                return done(null, user);
            }

        })
    })
});

passport.use(jwtStrategy);
passport.use(localStrategy);