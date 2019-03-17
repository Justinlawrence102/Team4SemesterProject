/* Dependencies */
var tripRequest = require('../controllers/tripRequest.server.controller.js'),
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
console.log("getting her server routes")
router.route('/')
  //.get(tripRequest.list)
//  .put(tripRequest.update);
  .post(tripRequest.createTrip);


/*
  The ':' specifies a URL parameter. 
 */
console.log("getting her server routes later on")

//router.route('/:listingId')
//  .get(tripRequest.read)
//  .put(tripRequest.update)
//  .delete(tripRequest.delete);

/*
  The 'router.param' method allows us to specify middleware we would like to use to handle 
  requests with a parameter.

  Say we make an example request to '/listings/566372f4d11de3498e2941c9'

  The request handler will first find the specific listing using this 'listingsById' 
  middleware function by doing a lookup to ID '566372f4d11de3498e2941c9' in the Mongo database, 
  and bind this listing to the request object.

  It will then pass control to the routing function specified above, where it will either 
  get, update, or delete that specific listing (depending on the HTTP verb specified)
 */
//router.param('tripRequestId', tripRequest.listingByID);

module.exports = router;
