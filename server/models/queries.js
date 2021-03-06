/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
        mongoose = require('mongoose'),
        client = require('./client.server.model.js'),
        trip = require('./tripRequest.server.model.js'),
        recommendation = require('./recommendation.server.model.js'),
        special = require('./special.server.model.js'),
        //admin = require('./admin.server.model.js'),
        adminNotes = require('./adminNote.server.model.js'),
        config = require('../config/config.js');

        //listings = require('./listings.json');

mongoose.connect(config.db.uri);


/*
//query to create a new user
var client1 = new client({
        username: "Kenneth",
        password: "ken1234",
        firstname: "KENNETH",
        lastname: "OYIBO",
        email: "k.oyibo@ufl.edu",
        tphone: 3520000000
});

client1.save(function(err){
        if (err) throw(err);
});



//query to create a new trip
var newTrip = new trip({
        email: "k.oyibo@ufl.edu",
        origin: "Miami",
        destination: "Pitts",
        returnDate:3/14/2019,
        departDate:3/14/2019,
        numPeople:4,
        budget: 6000,
        notes:"I love bananas",
});

newTrip.save(function(err){
    if (err) throw (err);
});
*/


var newSpecial = new special({
    title: "This is a test for special",
    summary:"This is a summary of the special",
    body:"this is the best special you will have",
    featured: 123,
    imageURL: "https://www.adventurouskate.com/wp-content/uploads/2017/05/DSCF0033.jpg"
});

newSpecial.save(function(err){
    if (err) throw (err);
});


/*
var special1 = new special({
    title: " Travel to Brazil",
    link: "www.braziltravel.com",
    summary:"This is a ......"
});

special1.save(function(err){
    if (err) throw (err);
});

*/
/*
var admin1 = new admin({
    username: "admin",
    password: "admin1234",
    aboutMe:{
        background:"greatest travel agent of all time",
        experience:"500 years experience"
    }
});

admin1.save(function(err){
    if (err) throw (err);
});

var adminNote1 = new adminNotes({
    clientName:"fav client",
    note:"remember to give him the best deal"
});

adminNote1.save(function(err){
    if (err) throw (err);
});
*/

//query to create a new 