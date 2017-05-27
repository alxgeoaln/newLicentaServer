const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var locationSchema = new Schema({
    lat: String,
    lng: String,
    createdAt: Date,
    time: String,
    author: String,
    location: String
});

const Location = module.exports = mongoose.model('Location', locationSchema);

//#region Location methods
module.exports.saveLocation = function (location, callback) {
    location.save(callback);
};
//endregion