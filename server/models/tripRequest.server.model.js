/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;


/*
	Schema for trips
*/
var tripSchema = new Schema({

	email:{type: String, required: true},
	origin: {type: String},
	destination: {type: String},
	returnDate:{type: Date},
	departDate:{type: Date},
	numPeople:{type: Number},
	budget:{type: Number},
	notes:{type: String},
}, {collection: 'trips'});


/* Use your schema to instantiate a Mongoose model */

var trip = mongoose.model('trip', tripSchema);



/* Export the model to make it avaiable to other parts of your Node application */


module.exports = trip;

