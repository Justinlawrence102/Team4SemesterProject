

/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;


/*
	Schema for admin notes
*/
var adminNoteSchema = new Schema({
	clientName:{type: String},
	note:{type: String}
}, {collection:'notes'});


var adminNotes = mongoose.model('adminNotes', adminNoteSchema);

module.exports = adminNotes;