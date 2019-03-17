
/* Dependencies */
var fs = require('fs'),
        mongoose = require('mongoose'),
        trip = require('../models/tripRequest.server.model.js'),
        config = require('../config/config.js');
/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the listing(s) as JSON in the response.

  HINT: if you are struggling with implementing these functions, refer back to this tutorial 
  from assignment 3 https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 */
console.log("running!")
/* Create a listing */

exports.createTrip = function(req, res) {
    /* Instantiate a trip request */
    var tripRequest = {
          email: req.body.email,
          origin: req.body.origin,
          departDate: req.body.departDate,
          stops: req.body.stops,
          numPeople: req.body.numPeople,
          budget: req.body.budget,
          notes:req.body.notes
    }
    
    /* Then save the listing */
    tripRequest.save(function(err) {
                        console.log("at controller saving")

                 if(err) {
                 console.log(err);
                 res.status(400).send(err);
                 } else {
                 res.json(tripRequest);
                 }
                 });
};

