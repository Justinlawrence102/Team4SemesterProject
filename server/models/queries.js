/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
        mongoose = require('mongoose'),
        client = require('./tripRequest.server.model.js'),
	mongooseDynamic = require ('mongoose-dynamic-schemas');
        config = require('../config/config.js');

        //listings = require('./listings.json');

//mongoose.connect(config.db.uri, {useMongoClient: true});

mongoose.connect(config.db.uri, {useMongoClient: true});


//query to create a new listing

var client1 = new client({
        username: "ken1234",
        password: "ken1234",
        firstname: "KENNETH",
        lastname: "OYIBO",
        email: "k.oyibo@ufl.edu",
        tphone: 3520000000,

        trips: [{
                origin: "Orlando",
                destination: "Houston",
                returnDate:3/14/2019,
                departDate:3/14/2019,
                numPeople:4,
                notes:"I like tomatoes",
                created_at: new Date,
                updated_at: new Date   

        }],
        created_at: new Date,
        updated_at: new Date

});


client1.save(function(err){

        if (err) throw(err);
});


// queries to find a an entry and add new trip

var newTrip = {
        origin: "Miami",
        destination: "Pitts",
        returnDate:3/14/2019,
        departDate:3/14/2019,
        numPeople:4,
        notes:"I love bananas",
        created_at: new Date,
        updated_at: new Date
}

client.findOneAndUpdate(
    {username: "ken1234"},
    {$push: {trips: newTrip}},
    {safe: true, upsert: true},
    function(err, model) {
        console.log(err);
    }
);
