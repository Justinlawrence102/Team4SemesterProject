/* Dependencies */
var mongoose = require('mongoose'),
	bcryptjs = require ('bcryptjs'),
	//bcrypt = require ('bcrypt'),
	jwt = require('jsonwebtoken'),
    client = require('../models/client.server.model.js');
    config = require('../config/config.js');

/*
create new user
*/
exports.createUser = function(req, res, next){

	if (client.findOne({username: req.body.username}).username === req.body.username){
        console.log('ERROR DUCPLICATE NAME')
		throw '"Username"'+req.body.username+'"is already taken';
	}
	console.log('at create user...');
	console.log(req.body.username);

	var user_info = {
		username: req.body.username,
		password: req.body.password,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		tphone: req.body.tphone
		};


	var user = new client (req.body);

	user.save(function(err){
		if(err){
			console.log(err);
			res.status(400).send(err);
		}else{
			res.json(user_info);
			//res.send("Successfully registered!");
		}
	});
};

/*
	authentication for when a user logs in
*/

exports.authenticate = function(req, res, next){
	console.log("in authenticate function...");
	
	client.findOne({username:req.body.username}, function(err, UserInfo){
		if (err){
			console.log(err);
			res.json({status: "Error", message:"User not found"});
		}else{
			if(bcrypyt.compareSync(req.body.password, UserInfo.password)){
				const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'),{expiresIn: '1 hr'});
				res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
			}else{
				res.json({status:"error", message: "Invalid email/password!!!", data:null});
			}

		}

	});
};


//console.log("running Client Server Controller!")

exports.list = function(req, res) {
    client.find()
    .exec(function (err, allusers) {
          if (err) { return next(err); }
          res.json(allusers)
          })
};
