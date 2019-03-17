
/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;



/*
	Schema for recommendations
*/
var recommendationSchema = new Schema({
	email:{type: String, required: true},
	title:{type: String},
	flights:{type: String},
	link: {type: String},
	detail:{type:String},
}, {collection: 'recommendations'});

var recommendation = mongoose.model('recommendation', recommendationSchema);

module.exports = recommendation;