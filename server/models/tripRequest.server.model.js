/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var clientSubmissionSchema = new Schema({
	firstName: {type: String, required: true, index: true},
	lastName: {type: String, required: true, index: true},
	email: {type: String, required: true},
	tphone: {type: Number, required:true},
	returnDate:{type: Date, required:true},
	departDate:{type: Date, required:true},
	numPeople:{type: Number, required:true},
	notes:{type: String},
	created_at: Date,
	updated_at: Date

});


/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */

clientSubmissionSchema.pre('save', function(next) {
                           console.log("at model saving")
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});


/* Use your schema to instantiate a Mongoose model */
var ClientSubmission = mongoose.model('ClientSubmission', clientSubmissionSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = ClientSubmission;
