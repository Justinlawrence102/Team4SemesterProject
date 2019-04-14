
/* Dependencies */
var fs = require('fs'),
        mongoose = require('mongoose'),
        blogs = require('../models/blogs.server.model.js'),
        config = require('../config/config.js');
/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the listing(s) as JSON in the response.

  HINT: if you are struggling with implementing these functions, refer back to this tutorial 
  from assignment 3 https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 */

exports.listBlogs = function(req, res) {
    console.log('in server controller')
//    console.log('userName: '+req.params.userName)
    blogs.find()
    .exec(function (err, allTrips) {
          if (err) { return next(err); }
          res.json(allTrips)
          })

};

exports.createPost = function(req, res){
    var newPost = {
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.body,
    featured: req.body.featured,
    imageURL: req.body.imageURL,
    }
    var blogPost = new blogs(req.body);

    /* Then save the blog post */
    blogPost.save(function(err) {
         console.log("at controller saving")
                      
                      if(err) {
                      console.log(err);
                      res.status(400).send(err);
                      } else {
                      res.json(newPost);
                      }
                      });
};

exports.editPost = function(req, res){
//    var updatedPost = {
//        title: req.body.title,
//        summary: req.body.summary,
//        body: req.body.body,
//        featured: req.body.featured,
//        imageURL: req.body.imageURL,
//    }
    console.log("at the server.controller with title: " + req.body.title)
    blogs.findOneAndUpdate({ title: req.body.title }, {summary: req.body.summary, body: req.body.body, featured: req.body.featured, imageURL: req.body.imageURL}, function(err, details) {
                           if (err) throw err;
                           console.log('at details: '+details)
                           });
}

exports.deletePost = function(req, res) {
    var listing = req.blogs;
    console.log("DELETING "+listing.title)
    blogs.findOneAndRemove({ title: req.body.title }, function(err, details) {
                           if (err) throw err;
                           });
}
