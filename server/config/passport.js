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
                       console.log('ERROR')
				return done(err)
			}
			else {
				if (user) {
					if (user.comparePassword(password, user.password)) {
                       console.log('success')
						return done(null, {
							username: user.username,
							id: user._id
						})
					}
					else {
                       console.log('Wrong password')
						return done(null, false)
					}
				}
				else {
                       console.log('email doesnt exist!')
					return done(null, false)
				}
			}
		})
	}))
}  
