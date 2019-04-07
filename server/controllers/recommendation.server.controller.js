/* Dependencies */
var fs = require('fs'),
        mongoose = require('mongoose'),
        rec = require('../models/recommendation.server.model.js'),
        config = require('../config/config.js');

console.log("running recommendation!")
//gets all user recommendation
exports.getRec = function(req, res){
    req.params = params(req);
    rec.find({userName: req.params.userName})
    .exec(function (err, allRecs){
        if (err){ return 
          next(err);}
          console.log("THIS WAS SUCCESFUL");
        res.json(allRecs)
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