const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var accidentNumber = new Schema({
    number: Number
});

var statisticsSchema = new Schema({
    January: [accidentNumber],
    February: [accidentNumber],
    March: [accidentNumber],
    April: [accidentNumber],
    May: [accidentNumber],
    June: [accidentNumber],
    July: [accidentNumber],
    August: [accidentNumber],
    September: [accidentNumber],
    October: [accidentNumber],
    November: [accidentNumber],
    December: [accidentNumber]
});

const Statistics = module.exports = mongoose.model('Statistics', statisticsSchema);


//#region Statistics methods

//endregion

