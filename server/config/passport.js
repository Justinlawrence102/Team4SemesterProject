var localStrategy = require('passport-local').Strategy,
	client = require('../models/client.server.model.js');

module.exports = function (passport) {
	passport.serializeUser(function(user, done) {
		done(null, user)
	})

	passport.deserializeUser(function(user, done) {
		done(null, user)
	})
	
	passport.use(new localStrategy(function(username, password, done){
		console.log('at passport with: ' + username + ' pass: ' + password);

		client.findOne({username: username}, function(err, user){
			if (err) {
				done(err)	
			}
			else {
				if (user) {
					if (user.comparePassword(password, user.password)) {
						done(null, {
							username: user.username,
							id: user._id
						})
					}
					else {
						done(null, false)	
					}
				}
				else {
					done(null, false)	
				}
			}
		})
	}))
}  