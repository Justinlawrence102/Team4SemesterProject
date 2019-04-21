/* Dependencies */
var special = require('../controllers/special.server.controller.js'),
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
console.log("getting the server routes")
router.route('/')

.get(special.listSpecials)
.post(special.createSpecial)
.put(special.editPost)

//router.param('tripRequestId', tripRequest.listingByID);

module.exports = router;
