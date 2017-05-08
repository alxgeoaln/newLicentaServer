//#region imports
var router = require('express').Router();
var passport = require('passport');
var requireAuth = passport.authenticate('jwt', {session: false});
var PhoneNumberController = require('../controller/phoneNumberController');
var User = require('../models/user');
//endregion


//#region Get and Post Todos
router.route('/users/:user_id/phoneNumber')
    .post(requireAuth, PhoneNumberController.create)
    .get(requireAuth, PhoneNumberController.index);
//endregion

//#region Delete Todos
router.route('/users/:user_id/todos/:todo_id')
// .delete(requireAuth, TodosController.destroy);
//endregion

module.exports = router;