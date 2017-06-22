const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var locationSchema = new Schema({
    id: String,
    lat: String,
    lng: String,
    createdAt: Date,
    author: String,
    address: String,
    isActive: Boolean
});

const Location = module.exports = mongoose.model('Location', locationSchema);

//#region Location methods
module.exports.saveLocation = function (location, callback) {
    location.save(callback);
};

module.exports.getLocation = function (callback) {
    Location.find({}).sort({createdAt: 'descending'}).select({}).exec(callback)
};


module.exports.getThisLocation = function (id, callback) {
    Location.findById(id, callback);
};

module.exports.updateStatus = function (id, callback) {
    Location.update({_id: id}, {$set: {isActive: true}}, {new: true}, callback);
};
//endregion