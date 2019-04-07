/* Dependencies */
var mongoose = require('mongoose'),
admin = require('../models/adminDashboard.server.model.js');
allClients = require('../models/client.server.model.js');

console.log('at the server.controller for admin')
exports.createRecommendation = function(req, res) {
    /* Instantiate a trip request */
    var tripRecommendation = {
    userName: req.body.userName,
    title: req.body.title,
    flight: req.body.flight,
    flightLink: req.body.flightLink,
    flightPrice: req.body.flightPrice,
    hotel: req.body.hotelName,
    hotelLink: req.body.hotelLink,
    hotelPrice: req.body.hotelPrice,
    cruise: req.body.cruiseName,
    cruiseLink:req.body.cruiseLink,
    CruisePrice:req.body.cruisePrice,
    otherDetails: req.body.otherDetails
    }
    var adminRecommendations = new admin(req.body);
    console.log('userName at cont: '+req.body.userName)
    
    //console.log('stops: '+tripRequests.stops)
    
    /* Then save the listing */
    adminRecommendations.save(function(err) {
                      console.log("at controller saving")
                      
                      if(err) {
                      console.log(err);
                      res.status(400).send(err);
                      } else {
                      res.json(tripRecommendation);
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
    console.log("getting all clients in dashboard here!")
    allClients.find()
    .sort([['lastname', 'ascending']])
    .exec(function (err, allClients) {
          if (err) { return next(err); }
          res.json(allClients)
          })
    
};

exports.editNotes = function(req, res){
    console.log('editing notes, notes is ' +req.body.notes) //+req.body.username
    allClients.findOneAndUpdate({ username: req.body.username }, {notes: req.body.notes}, function(err, details) {
                            if (err) throw err;
                            });
}
