
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
    req.params=params(req); // call the function above ;

    console.log('userName: '+req.params.userName)
    //console.log("HERE At serverController: userName is "+params(req).userName)//req.params.userName)
    trip.find({ userName: req.params.userName})//.sort('-numPeople':1)
    .sort([['numPeople', 'descending']]) //descending
    //.sort(-'departDate')
    .exec(function (err, allTrips) {
          if (err) { return next(err); }
          res.json(allTrips)
          })

};

var params=function(req){
    let q=req.url.split('?'),result={};
    if(q.length>=2){
        q[1].split('&').forEach((item)=>{
        try {
         result[item.split('=')[0]]=item.split('=')[1];
         } catch (e) {
     result[item.split('=')[0]]='';
          }
     })
    }
    return result;
}
