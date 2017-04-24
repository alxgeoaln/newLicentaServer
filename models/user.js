const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

var validateEmail = function (email) {
    return (/\S+@\S+\.\S+/).test(email)
};

var userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: "Adresa de email este necesara.",
        validate: [validateEmail, "Va rog introduceti o adresa de email valida."]
    },
    // name: {
    //     type: String
    // },
    password: {
        type: String
    }
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserByEmail = function (email, callback) {
    const query = {email: email};
    User.findOne(query, callback)
};
module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback)
        });
    });
};

module.exports.findUserId = function (payload, callback) {
    User.findById(payload, callback)
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    })
};
