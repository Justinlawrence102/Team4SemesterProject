
/* Dependencies */
var fs = require('fs'),
        mongoose = require('mongoose'),
        specials = require('../models/special.server.model.js'),
        config = require('../config/config.js');
/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the listing(s) as JSON in the response.

  HINT: if you are struggling with implementing these functions, refer back to this tutorial 
  from assignment 3 https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 */

exports.listSpecials = function(req, res) {
    console.log('in server controller for specails')
//    console.log('userName: '+req.params.userName)
    specials.find()
    .exec(function (err, allTrips) {
          if (err) { return next(err); }
          res.json(allTrips)
          })

};

exports.createPost = function(req, res){
    var newPost = {
    title: req.body.title,
    summary: req.body.summary,
    link: req.body.link,
    featured: req.body.featured,
    imageURL: req.body.imageURL,
    price: req.body.price,
    }
    var specialPost = new specials(req.body);
    console.log("at controller saving link: "+newPost.link)

    /* Then save the special post */
    specialPost.save(function(err) {
                     
                      if(err) {
                      console.log(err);
                      res.status(400).send(err);
                      } else {
                      res.json(newPost);
                      }
                      });
};

exports.editPost = function(req, res){

    console.log("at the server.controller with title: " + req.body.title)
    specials.findOneAndUpdate({ title: req.body.title }, {summary: req.body.summary, link: req.body.link, featured: req.body.featured, imageURL: req.body.imageURL, price: req.body.price}, function(err, details) {
                           if (err) throw err;
                           console.log('at details: '+details)
                           });
}

exports.deletePost = function(req, res) {
    var specials = req.specials;
    console.log("DELETING "+specials.title)
    specials.findOneAndRemove({ title: req.body.title }, function(err, details) {
                           if (err) {
                           console.log("SPECIAL: ERROR HERE!")
                           throw err;
                           }
                           });
}
