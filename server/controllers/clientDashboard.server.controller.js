
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
console.log("running Client Dashboard!")

exports.list = function(req, res) {
    console.log("getting all client's trips")
    trip.find({ userName: 'testingUser'})
    .sort([['departDate', 'ascending']])
    .exec(function (err, allTrips) {
          if (err) { return next(err); }
          res.json(allTrips)
          })

};

