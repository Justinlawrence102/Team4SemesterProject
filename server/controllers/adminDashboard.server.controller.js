/* Dependencies */
var mongoose = require('mongoose'), 
    admin = require('../models/adminDashboard.server.model.js');



exports.createRecomendation = function(req, res) {
    /* Instantiate a trip request */
    var tripRecomendation = {
    userName: req.body.userName,
    recTitle: req.body.recTitle,
    recFlightLink: req.body.recFlightLink,
    recFlightPrice: req.body.recFlightPrice,
    recHotelLink: req.body.recHotelLink,
    recHotelPrice: req.body.recHotelPrice,
    recNotes: req.body.recNotes,
    recCruiseLink:req.body.recCruiseLink,
    recCruisePrice:req.body.recCruisePrice
    }
    var tripRequests = new trip(req.body);
    console.log('userName: '+req.body.userName)
    
    //console.log('stops: '+tripRequests.stops)
    
    /* Then save the listing */
    tripRequests.save(function(err) {
                      console.log("at controller saving")
                      
                      if(err) {
                      console.log(err);
                      res.status(400).send(err);
                      } else {
                      res.json(tripRequest);
                      }
                      });
};
exports.list = function(req, res) {
    console.log("HERE At top")
    trip.find({ userName: 'testingUser'})
    .sort([['departDate', 'ascending']])
    .exec(function (err, allTrips) {
          if (err) { return next(err); }
          res.json(allTrips)
          })
    
};
