/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;


/*
	Schema for the admin
*/

var tripRecomendationSchema = new Schema({
	username: {type: String, required:true},
     title: {type: String},
    flight:{type: String},
    flightLink:{type: String},
    flightPrice:{type: Number},
    hotel:{type: String},
    hotelLink:{type: String},
    hotelPrice:{type: Number},
    cruise:{type: String},
    cruiseLink:{type: String},
    cruisePrice:{type: Number},
    notes:{type: String},
    otherDetails:{type: String},
   });


/* Use your schema to instantiate a Mongoose model */
tripRecomendationSchema.pre('save', function(next) {
               console.log("at model saving")
               var currentTime = new Date;
               this.updated_at = currentTime;
               if(!this.created_at)
               {
               this.created_at = currentTime;
               }
               next();
               });

var tripRecomendation = mongoose.model('recommendations', tripRecomendationSchema);

module.exports = tripRecomendation;
