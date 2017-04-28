//#region imports
var router = require('express').Router();
var passport = require('passport');
var requireAuth = passport.authenticate('jwt', {session: false});
var TodosController = require('../controller/todoController');
var User = require('../models/user');
//endregion

// router.post('/', requireAuth, function (req, res) {
//
//     var userId = req.user._id;
//     var todo = {
//         text: req.body.text
//     };
//
//     User.saveTodo(userId, todo, function (err, todo) {
//         if (err)
//             res.json({success: false, message: "Could not post todo"});
//         else
//             res.json({todos: req.user.todo});
//     })
// });

router.route('/users/:user_id/todos')
    .get(requireAuth, TodosController.index);

module.exports = router;