var User = require('../models/user');

exports.create = function (req, res, next) {
    var user = req.user;
    var number = req.body.number;
    var name = req.body.name;
    var count = user.phoneNumber.push({
        number: number,
        name: name
    });
    var _id = user.phoneNumber[count - 1]._id;
    user.save(function (err) {
        if (err) {
            return next(err)
        }
        res.json({phoneNumber: {number: number, name: name, _id: _id}})
    })
};

exports.index = function (req, res, next) {
    var userId = req.user._id;

    User.findUserId(userId, function (err, user) {
        if (err)
            res.json({success: false, message: err})
        else
            res.json({phoneNumbers: user.phoneNumber});
    })

    // res.json({todos: req.user.todo})
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
