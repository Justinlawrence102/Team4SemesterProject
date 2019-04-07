/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/*
	Schema for trips
*/
var blogSchema = new Schema({
	title: {type: String},
	summary:{type: String},
	body:{type: String},
    featured: {type: Number},
    imageURL: {type: String},
});
console.log('in server model')

/* Use your schema to instantiate a Mongoose model */
blogSchema.pre('save', function(next) {
        console.log("at model saving")
        var currentTime = new Date;
        this.updated_at = currentTime;
        if(!this.created_at)
                           {
                           this.created_at = currentTime;
                           }
                           next();

                           });

var blog = mongoose.model('blogs', blogSchema);


/* Export the model to make it avaiable to other parts of your Node application */


module.exports = blog;

