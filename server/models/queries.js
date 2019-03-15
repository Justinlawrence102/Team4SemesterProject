/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
        mongoose = require('mongoose'),
        ClientSubmission = require('./tripRequest.server.model.js'),
        config = require('../config/config.js');
        //listings = require('./listings.json');

//mongoose.connect(config.db.uri, {useMongoClient: true});

mongoose.connect(config.db.uri, {useMongoClient: true});

mongooseDynamic.addSchemaField(client, "trips.trip1",{
        origin: {type: String, Default:"Great"},
        destination: {type: String, Default: "one"},
        returnDate:{type: Date},
        departDate:{type: Date},
        numPeople:{type: Number},
        notes:{type: String},
        });
//query to create a new listing

var client1 = new ClientSubmission({
        username: "ken1234",
        password: "ken1234",
        firstname: "KENNETH",
        lastname: "OYIBO",
        email: "k.oyibo@ufl.edu",
        tphone: 3520000000,

        trips:{
                trip0:{
                        origin: "Orlando",
                        destination: "Houston",
                        returnDate:3/14/2019,
                        departDate:3/14/2019,
                        numPeople:4,
                        notes:"I like tomatoes",
                        created_at: new Date,
                        updated_at: new Date   
                },
                trip1:{
                        origin: "Orlando",
                        destination: "Houston",
                        returnDate:3/14/2019,
                        departDate:3/14/2019,
                        numPeople:4,
                        notes:"I like apples",
                        created_at: new Date,
                        updated_at: new Date 
                }

        },
        created_at: new Date,
        updated_at: new Date

});


client1.save(function(err){

        if (err) throw(err);
});