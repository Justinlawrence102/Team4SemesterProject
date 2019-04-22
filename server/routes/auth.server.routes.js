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
//    router.post('/', passport.authenticate('local', { //express was router
//        failureRedirect: '../login.html',
//        successRedirect: '../clientDashboard.html',
//        failureFlash: true
//    }), function(req, res) {
//            res.redirect('/home.html');
//    })
    router.post('/',
             passport.authenticate('local'),
             function(req, res) {
             console.log('at function '+req.user.username)
                if (req.user != null) {
                console.log('ALL GOOD')
                res.status = 200
                }
                else {
                console.log('ERROR')
                res.status = 401
                }
             res.redirect('/');
             });
    router.get('user', isValidUser, function(res, req, next) {
               
               });
    function isValidUser(req, res, next){
        if (req.isAuthenticated()){
            next();
        }
        else {
            return res.status(401)
        }
    }
	return router;

};

//module.exports = router;
