
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
<<<<<<< HEAD
exports.createTrip = function(req, res) {
    /* Instantiate a trip request */
    var tripRequest = new trip(
      
          email: req.body.email,
          origin: req.body.origin,
          destination: req.body.destination,
          returnDate: req.body.returnDate,
          departDate: req.body.departDate,
          numPeople: req.body.numPeople,
          budget: req.body.budget,
          notes:req.body.notes,

      );
    
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

=======
exports.update = function(req, res) {
    /* Instantiate a trip request */
    var tripRequest = new ClientSubmtion(req.body);
    var newTrip = {
    origin: req.body.origin,
    destination: req.body.destination,
    returnDate:req.body.returnDate,
    departDate:req.body.departDate,
    buget: req.body.buget,
    numPeople:req.body.numPeople,
    notes:req.body.notes,
    created_at: new Date,
    updated_at: new Date
    }
    /* Then save the listing, appending it to the origianl account name */
    console.log("here, at the serverController "+newTrip.origin)
    ClientSubmtion.findOneAndUpdate(
                                    {username: "ken1234"},
                                    {$push: {trips: newTrip}},
                                    {safe: true, upsert: true},
                                    function(err, model) {
                                    console.log("ERROR adding new trip")
                                    console.log(err);
                                    }
                                    );
    res.json(newTrip)
};

/* Show the current listing */
exports.read = function(req, res) {
  /* send back the listing as json from the request */
 
};


/* Delete a listing */
exports.delete = function(req, res) {
  /** TODO **/
  /* Remove the article */
};
>>>>>>> d4294d5c9b3d9d5270105b28c580e8ed90652452


