var jwt = require('jwt-simple');
var config = require('../config');

function tokenForUser(user) {
    var timeStamp = new Date().getTime();
    return jwt.encode({
        sub: user.id,
        iat: timeStamp
    }, config.secret)
}


exports.signin = function (req, res, next) {
    var user = req.user;
    res.send({token: tokenForUser(user), user_id: user._id})
};