/* Dependencies */
var express = require('express'), 
    router = express.Router(),
    client = require('../models/client.server.model.js'),
    clients = require('../controllers/client.server.controller.js'),
    passport = require('passport');


console.log("at auth routes");

//router.route('/')
//.get(clients.listOne)
//.post(clients.authenticate)

module.exports = function(passport) {
    router.post('/', passport.authenticate('local', { //express was router
        failureRedirect: '/login.html',
        successRedirect: '/home.html',
        failureFlash: true
    }), function(req, res) {
            res.send('test')
    })
	return router;

};

//module.exports = router;
