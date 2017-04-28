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
    // res.json('pula')
    res.json({todos: req.user.todo})
};