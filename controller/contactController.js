var User = require('../models/user');

exports.create = function (req, res, next) {
    var user = req.user;
    var email = req.body.email;
    var name = req.body.name;
    var count = user.contact.push({
        email: email,
        name: name
    });
    console.log(user.contact);
    var _id = user.contact[count - 1]._id;
    user.save(function (err) {
        if (err) {
            return next(err)
        }
        res.json({contact: {email: email, name: name, _id: _id}})
    })
};

exports.index = function (req, res, next) {
    var userId = req.user._id;

    User.findUserId(userId, function (err, user) {
        if (err)
            res.json({success: false, message: err})
        else
            res.json({contacts: user.contact});
    })

};

exports.destroy = function (req, res, next) {
    var user = req.user;
    var todo_id = req.params.todo_id;

    user.todo = user.todo.filter(function (todo) {
        if (todo._id == todo_id) {
            return false;
        }
        return true;
    });
    user.save(function (err) {
        if (err) {
            return next(err)
        }
        res.json({});
    })
};
