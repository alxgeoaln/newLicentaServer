var router = require('express').Router();
var Location = require('../../models/location');

// region Get all requests
router.get('/', function (req, res) {
    Location.getLocation(function (err, locations) {
        if (err) {
            res.json({success: false, message: 'Please try again later'});
            console.log(err);
        } else {
            res.json(locations);
        }
    })
});
//endregion

router.get('/accidentsPerMonth', function (req, res) {
    Location.getLocation(function (err, locations) {
        if (err) {
            res.json({success: false, message: 'Please try again later'});
            console.log(err);
        } else {
            var locationArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            locations.forEach(function (location) {
                locationArray[location.createdAt.getMonth()]++;
            });

            res.json(locationArray);
        }
    })
});

//region Get specific result
router.get('/:id', function (req, res) {

    var id = req.params.id;

    Location.getThisLocation(id, function (err, location) {
        if (err) {
            console.log(err);
            res.json({success: false, message: 'Cannot get specific location'})
        } else {
            res.json(location);
        }
    })
});
//endregion

//region updateStatus
router.get('/updateStatus/:id', function (req, res) {
    var id = req.params.id;

    Location.updateStatus(id, function (err, status) {
        if (err) {
            console.log(err);
            res.json({success: false, message: 'Cannot update status'});
        } else {
            res.json({success: true, message: 'Status updated successfully'});
        }
    })
});
//endregion


module.exports = router;