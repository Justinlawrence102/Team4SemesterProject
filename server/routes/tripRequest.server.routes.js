/* Dependencies */
var tripRequest = require('../controllers/tripRequest.server.controller.js'),
	clientDashboard = require('../controllers/clientDashboard.server.controller.js'),
    express = require('express'), 
    clients = require('../controllers/client.server.controller.js'),
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
console.log("getting her server routes")
router.route('/')
.post(tripRequest.createTrip)
.get(clientDashboard.list)

//router.route('/:listingId')
//  .get(tripRequest.read)
//  .put(tripRequest.update)
//  .delete(tripRequest.delete);


//router.param('tripRequestId', tripRequest.listingByID);

module.exports = router;
