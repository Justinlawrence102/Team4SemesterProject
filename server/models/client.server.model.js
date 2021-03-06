/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
	bcryptjs = require('bcryptjs'),
    Schema = mongoose.Schema;


/*
Schema for users
*/
var clientSchema = new Schema({
	username: {type: String , unique: true,required: true},
	password: {type: String, required: true},
	firstname: {type: String, required: true, index: true},
	lastname: {type: String, required: true, index: true},
    notes: {type: String},
	email: {type: String, required: true, required: true},
	tphone: {type: Number},
},{collection: 'users'});

//This is a function to get the full name. It does not persist to the DB
//get fullname by making the call "var.fullName"
//clientSchema.virtual('fullName').get(function () {
 // return this.firstname + ' ' + this.lastname;
//});


//this is pre function to hash the passwords(encrypt the plain password)

clientSchema.pre('save', function(next){
    this.password = bcryptjs.hashSync(this.password, 10);
    next();
});


clientSchema.methods.hashPassword = function(password) {
	console.log('received password: ' + password)
	return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10))
}

clientSchema.methods.comparePassword = function(password, hash) {
	//var flag = bcryptjs.compareSync(password,hash);
	//console.log(flag)
	return bcryptjs.compareSync(password,hash);
}

var client = mongoose.model('client', clientSchema);

module.exports = client;
