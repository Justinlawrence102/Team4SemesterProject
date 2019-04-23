 var path = require('path'),
    express = require('express'), 
    params = require('express-params');
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser')
    config = require('./config'),
    jwt = require('jsonwebtoken'),
    session = require('express-session'),
    passport = require('passport'),
    tripRequestRouter = require('../routes/tripRequest.server.routes.js'),
    clientRouter = require('../routes/client.server.routes.js'),
    blogsRouter = require('../routes/blogs.server.routes.js'),
    specialsRouter = require('../routes/special.server.routes.js'),
    indexRouter = require('../routes/index.routes.js'),
    nodemailer = require("nodemailer"),
    flash = require('connect-flash'),
    clientRecommendationsRouter = require('../routes/recommendation.server.routes.js'),
    recommendationsRouter = require('../routes/adminDashboard.server.routes.js');

module.exports.init = function() {

  require('./passport')(passport)

  //connect to database
  mongoose.connect(config.db.uri);
  mongoose.set('useFindAndModify', false);

  //initialize app
  var app = express();
    var authRouter = require('../routes/auth.server.routes.js')(passport);

  var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "bochtraveltest",
      pass: "thisisatest1234"
    }
  })

  //enable request logging for development debugging
  app.use(morgan('dev'));

   //set the jwt secret key
  app.set('secretKey', 'Team$4');

  //body parsing middleware 
  app.use(bodyParser.json());
  //  app.use(express.bodyParser());

  /**TODO
  Serve static files */
  app.use(express.static('client'));
  console.log("dirset it "+__dirname);
  //app.use(express.static('client'));


  //initialize passport
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(session({
    secret: 'test',
    saveUninitialized: false,
    resave: false
  }))


  //flash messages --testing/future implementation, not currently used
  app.use(flash());
  app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
  });


  /**TODO 
  Use the listings router for requests to the api */
    app.use('/', indexRouter);
    app.use('/api/requests', tripRequestRouter);
    app.use('/api/clients', clientRouter);
    app.use('/api/recommendations', recommendationsRouter);
    app.use('/api/users',recommendationsRouter);
    app.use('/api/blogs',blogsRouter);
    app.use('/api/clientRecommendations', clientRecommendationsRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/specials', specialsRouter);
    
    app.get('/', function (req, res) {
            if (req.user) {
            res.render('home.html', {});
            } else {
            res.render('login.html', {});
            }
            });
    
    app.use('/api/clients', function(req, res, next) {
            if (!req.user) {
            res.redirect('/');
            } else {
            next();
            }
            })

    app.get('/send', function (req,res) {
      var mailOptions = {
        from: req.query.to,
        to: "bochtraveltest@gmail.com",
        subject: req.query.subject + " [Email sent from " + req.query.name + ", " + req.query.to + "].",
        text: req.query.text + "\n\nEmail sent from:" + "\nName: " + req.query.name + "\nEmail address: " + req.query.to
      }
      console.log(mailOptions);
      res.type("text/plain");

      smtpTransport.sendMail(mailOptions, function(error,response) {
        if (error) {
          console.log(error);
          res.end("error");
        }
        else {
          res.end("sent");
        }
      });
    });

    app.get('/contact-success', function (req,res) {
      res.sendfile('./client/contact-success.html');
    });
  
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
