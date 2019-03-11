/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var clientSubmissionSchema = new Schema({
	name: {type: String, required: true, index: true},
	email: {type: String, required: true,
	phone: {type: Number, required:true,
	tripInfo:{ 
		origin:{type: String, required: true},
		destination:{type: String, required: true},
		departureDate:{ 
			month:{type: Number, required: true},
			day:{type: Number, required: true},
			year: {type: Number, required:true},
			hour:{type: Number, required:true},
			minute:{type: Number, required:true},
			meridiem:{type:String, required:true}
			},
		returnDate:{
			month:{type: Number, required:true},
			day:{type: Number, required: true},
                        year: {type: Number, required:true},
                        hour:{type: Number, required:true},
                        minute:{type: Number, required:true},
                        meridiem:{type:String, required:true}
                        },
		budget:{type: Number, required:true},
		num_people:{type: Number, required:true},
	},
	additional_info:{type: String},
	created_at: Date,
	updated_at: Date

});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
clientSubmissionSchema.pre('save', function(next) {
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
