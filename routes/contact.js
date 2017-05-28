//#region imports
var router = require('express').Router();
var passport = require('passport');
var requireAuth = passport.authenticate('jwt', {session: false});
var ContactController = require('../controller/contactController');
var User = require('../models/user');
//endregion


//#region Get and Post Contacts
router.route('/users/:user_id/contact')
    .post(requireAuth, ContactController.create)
    .get(requireAuth, ContactController.index);
//endregion

//#region Delete Contacts
router.route('/users/:user_id/contact/:contact_id')
    .delete(requireAuth, ContactController.destroy);
//endregion

module.exports = router;