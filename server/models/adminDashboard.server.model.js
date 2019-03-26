/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;


/*
	Schema for the admin
*/

var tripRecomendationSchema = new Schema({
	username: {type: String, required:true, unique:true},
     recTitle: {type: String},
    recFlightLink:{type: String},
    recFlightPrice:{type: Number},
    recHotelLink:{type: String},
    recHotelPrice:{type: Number},
    recNotes:{type: String},
    recCruiseLink:{type: String},
    recCruisePrice:{type: Number},
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

var tripRecomendation = mongoose.model('admin', tripRecomendationSchema);

module.exports = tripRecomendation;
