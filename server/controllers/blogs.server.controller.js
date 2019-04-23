
/* Dependencies */
var fs = require('fs'),
        //need path for res.sendFile() in getBlog function to work correctly without an absolute path
        path = require('path'),
        mongoose = require('mongoose'),
        blogs = require('../models/blogs.server.model.js'),
        config = require('../config/config.js');


exports.listBlogs = function(req, res) {
    console.log('in server controller')
    blogs.find()
    .exec(function (err, allTrips) {
          if (err) { return next(err); }
          res.json(allTrips)
          })

};

exports.getBlog = function(req, res) {
   var blog = req.params;

   console.log("FETCHING " + blog.title);
   
    var fetched =
    blogs.findOne({ title: blog.title }, function(err, details) {
                           if (err) {
                           console.log("ERROR FINDING BLOG!")
                           throw err;
                           }
                           });

    res.blog = fetched;
    res.sendFile(path.resolve('client/viewBlogs.html'));  
};

exports.blogsByID = function(req, res, next, id) {
  blogs.findById(id).exec(function(err, blog) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.blog = blog;
      console.log('fetched blog in blogsByID: ' + req.blog.title);
      next();
    }
  });
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
    var blog = req.blogs;
    console.log("DELETING "+blog.title)
    blogs.findOneAndRemove({ title: req.body.title }, function(err, details) {
                           if (err) {
                           console.log("ERROR HERE!")
                           throw err;
                           }
                           });
}
