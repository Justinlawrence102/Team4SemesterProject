/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;


/*
	Schema for the admin
*/

var adminSchema = new Schema({
	username: {type: String, required:true, unique:true},
	password: {type: String, required: true},
	aboutMe:{
		background:{type: String},
		experience:{type: String},
	},
}, {collection:'admin'});


var admin = mongoose.model('admin', adminSchema);

module.exports = admin;