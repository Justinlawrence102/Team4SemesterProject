 //This file holds any configuration variables we may need 
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password


module.exports = {
  db: {
    uri: //place the URI of your mongo database here
  },
     port: 8080
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */
