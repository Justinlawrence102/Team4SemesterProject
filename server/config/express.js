 var path = require('path'),
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    jwt = require('jsonwebtoken'),
    session = require('express-session'),
    passport = require('passport'),
    tripRequestRouter = require('../routes/tripRequest.server.routes.js'),
    clientRouter = require('../routes/client.server.routes.js'),
    blogsRouter = require('../routes/blogs.server.routes.js'),
    indexRouter = require('../routes/index.routes.js'),
    recomendationsRouter = require('../routes/adminDashboard.server.routes.js');


module.exports.init = function() {

  require('./passport')(passport)

  //connect to database
  mongoose.connect(config.db.uri);
  mongoose.set('useFindAndModify', false);

  //initialize app
  var app = express();
  var authRouter = require('../routes/auth.server.routes.js')(passport);

  //enable request logging for development debugging
  app.use(morgan('dev'));

   //set the jwt secret key
  app.set('secretKey', 'Team$4');

  //body parsing middleware 
  app.use(bodyParser.json());

  
  /**TODO
  Serve static files */
  app.use(express.static('client'));
    
  console.log("dirset it "+__dirname);
  app.use(express.static('client'));


  //initialize passport
  app.use(passport.initialize());
  app.use(passport.session());

  //not sure if need this or not
  app.use(session({
    secret: 'test',
    saveUninitialized: false,
    resave: false
  }))

  /**TODO 
  Use the listings router for requests to the api */
    app.use('/', indexRouter);
    app.use('/api/requests', tripRequestRouter);
    app.use('/api/clients', clientRouter);
    app.use('/api/recomendations', recomendationsRouter);
    app.use('/api/users',recomendationsRouter);
    app.use('/api/blogs',blogsRouter);

    //ash
    app.use('/api/auth', authRouter);
  

  /**TODO
  Go to homepage for all routes not specified */
   // app.get('/', function(req, res){ 
     // res.sendfile('./client/home.html');
    //});

    //app.get('/logout', function (req, res) {
     // res.send('/home')
   // });

  return app;
};  
