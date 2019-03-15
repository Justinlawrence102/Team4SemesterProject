/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
	mongoose = require('mongoose'),
	ClientSubmission = require('./listings.server.model.js'),
	config = require('../config/config.js');
	//listings = require('./listings.json');

//mongoose.connect(config.db.uri, {useMongoClient: true});

mongoose.connect(config.db.uri, {useMongoClient: true});
//query to create a new listing

var client1 = new ClientSubmission({
        firstname: "KENNETH",
        lastname: "OYIBO",
        email: "k.oyibo@ufl.edu",
        tphone: 3522145571,
        returnDate:3/14/2019,
        departDate:3/14/2019,
        numPeople:4,
        notes:"I like apples",
        created_at: new Date,
        updated_at: new Date

});


client1.save(function(err){

        if (err) throw(err);
});

