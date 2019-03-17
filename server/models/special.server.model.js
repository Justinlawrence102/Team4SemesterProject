/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;



/*
	Schema for specials
*/
var specialSchema = new Schema({
	link:{type: String},
	summary:{type: String}
}, {collection: 'special'});


var special = mongoose.model('special',specialSchema);

module.exports = special;