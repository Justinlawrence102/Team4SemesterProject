 //This file holds any configuration variables we may need 
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password


module.exports = {
  db: {
 uri: 'mongodb://KennethOyibo:ken1234@ds125481.mlab.com:25481/kenneth_database',
  },
     port: 8080
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */
