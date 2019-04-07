
/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;



/*
	Schema for recommendations
*/
var recommendationSchema = new Schema({
	userName:{type: String, required: true},
	fullName:{type: String},
	recTitle:{type: String},
	recFlightName:{type: String},
	recFlightLink:{type: String},
	recFlightPrice:{type: String},
	recHotelName:{type: String},
	recHotelLink:{type: String},
	recHotelPrice:{type: String},
	recDetails: {type: String},
	recCruiseName: {type: String},
	recCruiseLink: {type: String},
	recCruisePrice: {type: String},
	
}, {collection: 'recommendations'});

var recommendation = mongoose.model('recommendation', recommendationSchema);

module.exports = recommendation;