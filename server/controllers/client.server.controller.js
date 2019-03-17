/* Dependencies */
var mongoose = require('mongoose'),
	bcrypt = require ('bcrypyt'),
	jwt = require('jsonwebtoken'),
    client = require('../models/client.server.model.js');


/*
create new user
*/

export.createUser = function(req, res, next){

	if (client.findOne({username: req.username})){
		throw '"Username"'+req.username+'"is already taken';
	}

	const user = new Client(
		username: req.body.username,
		password: req.body.password,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		tphone: req.body.tphone,
		);

	user.save(function(err){
		if(err){
			console.log(err);
			res.status(400).send(err);
		}else{
			res.send("Successfully registered!");
		}
	});
};

/*
	authentication for when a user logs in
*/
export.authenticate = function(req, res, next){
	client.findOne({username:req.body.email}, function(err, UserInfo){
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

