/* Dependencies */
var adminDashboard = require('../controllers/adminDashboard.server.controller.js'),
	recommendation = require('../controllers/recommendation.server.controller.js'),
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
console.log("getting the server routes")
router.route('/')

.post(adminDashboard.createRecommendation)
//.get(adminDashboard.listClientDetails)
.get(adminDashboard.listAllClients)
.put(adminDashboard.editNotes)

//router.route('/:listingId')
//  .get(tripRequest.read)
//  .put(tripRequest.update)
//  .delete(tripRequest.delete);


//router.param('tripRequestId', tripRequest.listingByID);

module.exports = router;
