
/* Dependencies */
var fs = require('fs'),
        mongoose = require('mongoose'),
        special = require('../models/special.server.model.js'),
        config = require('../config/config.js');


exports.listSpecials = function(req, res) {
    special.find()
    .exec(function (err, allSpecials) {
          if (err) { return next(err); }
          res.json(allSpecials);
          })

};

exports.createSpecial = function(req, res){
    var newSpecial = {
    title: req.body.title,
    link: req.body.link,
    summary: req.body.summary,
    }
    var specialPost = new special(req.body);

    special.save(function(err) {
         console.log("saving new special");
                      
                      if(err) {
                      console.log(err);
                      res.status(400).send(err);
                      } else {
                      res.json(newSpecial);
                      }
                      });
}
