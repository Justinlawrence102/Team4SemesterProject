 var path = require('path'),
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    jwt = require('jsonwebtoken'),
    tripRequestRouter = require('../routes/tripRequest.server.routes.js');

module.exports.init = function() {

  //connect to database
  mongoose.connect(config.db.uri);
  mongoose.set('useFindAndModify', false);

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

   //set the jwt secret key
  app.set('secretKey', 'Team$4');

  //body parsing middleware 
  app.use(bodyParser.json());

  
  /**TODO
  Serve static files */
   app.use(express.static('client'))
    
console.log("dirset it "+__dirname)
    app.use(express.static('client'))


  /**TODO 
  Use the listings router for requests to the api */
    app.use('/api/requests', tripRequestRouter)

  /**TODO
  Go to homepage for all routes not specified */
    app.get('/', function(req, res){ //app.use(function(req, res){
            //res.sendfile('./client', './client/index.html');
           
            res.sendfile('./client/home.html');

            });
  return app;
};  
