exports.create = function (req, res, next) {
    var user = req.user;
    var text = req.body.text;
    var count = user.todo.push({
        text: text
    });
    var _id = user.todo[count - 1]._id;
    console.log(_id);
    user.save(function (err) {
        if (err) {
            return next(err)
        }
        res.json({todo: {text: text, _id: _id}})
    })
};

exports.index = function (req, res, next) {
    res.json({todos: req.user.todo})
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