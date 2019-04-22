	var express = require('express'),
		router = express.Router(),
		passport = require('passport');   


    var loggedIn = function(req, res, next) {

      console.log('at loggedIn function with: ' + req.username);

      if(req.isAuthenticated()) {
        next()
          console.log("here in index.routes")
      }
      else {
        res.redirect('/login.html');
      }
    }

    router.get('/', function (req, res, next) {
               console.log("at the router.get")
  		res.redirect('/home.html')
	});


	router.get('/api/profile', loggedIn, function (req, res, next) {
		//if authenticated, redirect to client dashboard
               console.log("at the api profile")
			res.redirect('/clientDashboard.html', {
				user: req.user
  			})
	});

	/*
	router.get('/logout', function (req, res) {
      req.logout()
      res.redirect('/home.html')
    });
    */

	module.exports = router;
