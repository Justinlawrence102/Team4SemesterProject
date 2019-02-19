 //This file holds any configuration variables we may need 
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password


module.exports = {
  db: {
 uri: 'mongodb://test:testing123@ds021984.mlab.com:21984/travel_agent', //place the URI of your mongo database here
  },
     port: 8080
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */
