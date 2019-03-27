/* Dependencies */
var adminDashboard = require('../controllers/adminDashboard.server.controller.js'),
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
console.log("getting the server routes for admin dashboard")
router.route('/')

.post(adminDashboard.createRecomendation)
//.get(adminDashboard.listClientDetails)
.get(adminDashboard.listAllClients);

//router.route('/:listingId')
//  .get(tripRequest.read)
//  .put(tripRequest.update)
//  .delete(tripRequest.delete);


//router.param('tripRequestId', tripRequest.listingByID);

module.exports = router;
