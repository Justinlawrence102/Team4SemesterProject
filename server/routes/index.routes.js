	var express = require('express'),
		router = express.Router(),
		passport = require('passport');   


    var loggedIn = function(req, res, next) {

      console.log('at logged in function with: ' + req.username);

      if(req.isAuthenticated()) {
        next()
      }
      else {
        res.redirect('/login.html');
      }
    }

    router.get('/', function (req, res, next) {
  		res.redirect('/home.html')
	});


	router.get('/api/profile', loggedIn, function (req, res, next) {
		//if authenticated, redirect to client dashboard
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