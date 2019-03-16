/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create a new schema */

var clientSchema = new Schema({

	username: {type: String , unique: true,required: true},
	password: {type: String, unique: true, required: true},
	firstname: {type: String, required: true, index: true},
	lastname: {type: String, required: true, index: true},
	email: {type: String, required: true, required: true},
	tphone: {type: Number},
	tripCount: {type:Number, default: 0},
	trips:[{

			origin: {type: String},
			destination: {type: String},
			returnDate:{type: Date},
			departDate:{type: Date},
			numPeople:{type: Number},
			notes:{type: String},
	}]
	,
	created_at: Date,
	updated_at: Date
},{ collection: 'users' });



/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */


clientSchema.pre('save', function(next) {
                           console.log("at model saving")
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

//This is a function to get the full name. It does not persist to the DB
//get fullname by making the call "var.fullName"
clientSchema.virtual('fullName').get(function () {
  return this.firstname + ' ' + this.lastname;
});


/* Use your schema to instantiate a Mongoose model */
var client = mongoose.model('clients', clientSchema)

/* Export the model to make it avaiable to other parts of your Node application */

module.exports = client;


