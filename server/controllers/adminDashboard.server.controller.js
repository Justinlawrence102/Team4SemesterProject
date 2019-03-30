/* Dependencies */
var mongoose = require('mongoose'),
admin = require('../models/adminDashboard.server.model.js');
allClients = require('../models/client.server.model.js');

console.log('at the server.controller for admin')
exports.createRecomendation = function(req, res) {
    /* Instantiate a trip request */
    var tripRecomendation = {
    username: req.body.username,
    title: req.body.title,
    flight: req.body.flight,
    flightLink: req.body.flightLink,
    recHotelLink: req.body.recHotelLink,
    recHotelPrice: req.body.recHotelPrice,
    otherDetails: req.body.otherDetails,
    notes: req.body.notes,
    recCruiseLink:req.body.recCruiseLink,
    recCruisePrice:req.body.recCruisePrice
    }
    var adminRecomendations = new admin(req.body);
    console.log('userName at cont: '+req.body.username)
    
    //console.log('stops: '+tripRequests.stops)
    
    /* Then save the listing */
    adminRecomendations.save(function(err) {
                      console.log("at controller saving")
                      
                      if(err) {
                      console.log(err);
                      res.status(400).send(err);
                      } else {
                      res.json(tripRecomendation);
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
