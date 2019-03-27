/* Dependencies */
var mongoose = require('mongoose'),
admin = require('../models/adminDashboard.server.model.js');
allClients = require('../models/client.server.model.js');

console.log('at the server.controller for admin')
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
//exports.listClientDetails = function(req, res) {
//    console.log("Getting client details")
//    //console.log('userName: '+req.body.userName)
//    admin.find({ userName: 'testingUser'})
//    .sort([['departDate', 'ascending']])
//    .exec(function (err, allTrips) {
//          if (err) { return next(err); }
//          res.json(allTrips)
//          })
//
//};

exports.listAllClients = function(req, res) {
    console.log("getting all clients")
    allClients.find()
    .sort([['lastname', 'ascending']])
    .exec(function (err, allClients) {
          if (err) { return next(err); }
          res.json(allClients)
          })
    
};
