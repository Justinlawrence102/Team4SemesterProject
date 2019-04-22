/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/*
	Schema for trips
*/
var specialsSchema = new Schema({
	title: {type: String},
	summary:{type: String},
	body:{type: String},
    featured: {type: Number},
    imageURL: {type: String},
});
console.log('in specialserver model')

/* Use your schema to instantiate a Mongoose model */
specialsSchema.pre('save', function(next) {
        console.log("at specialmodel saving")
        var currentTime = new Date;
        this.updated_at = currentTime;
        if(!this.created_at)
                           {
                           this.created_at = currentTime;
                           }
                           next();

                           });

var specials = mongoose.model('specials', specialsSchema);


/* Export the model to make it avaiable to other parts of your Node application */


module.exports = specials;

