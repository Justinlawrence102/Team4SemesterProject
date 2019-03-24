/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/*
	Schema for trips
*/
var stopsSchema = new Schema({stopLocation: String, stopDate: Date });
var tripSchema = new Schema({

	userName:{type: String, required: true},
	origin: {type: String},
	returnDate:{type: Date},
	departDate:{type: Date},
    stops: [stopsSchema],
	numPeople:{type: Number},
	budget:{type: Number},
	notes:{type: String},
});

/* Use your schema to instantiate a Mongoose model */
tripSchema.pre('save', function(next) {
        console.log("at model saving")
        var currentTime = new Date;
        this.updated_at = currentTime;
        if(!this.created_at)
                           {
                           this.created_at = currentTime;
                           }
                           next();

                           });

var trip = mongoose.model('trip', tripSchema);


/* Export the model to make it avaiable to other parts of your Node application */


module.exports = trip;

