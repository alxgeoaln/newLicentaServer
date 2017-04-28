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

//#region Get and Post Todos
router.route('/users/:user_id/todos')
    .post(requireAuth, TodosController.create)
    .get(requireAuth, TodosController.index);
//endregion

//#region Delete Todos
router.route('/users/:user_id/todos/:todo_id')
    .delete(requireAuth, TodosController.destroy);
//endregion

module.exports = router;