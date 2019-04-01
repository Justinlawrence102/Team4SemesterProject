/* Dependencies */
var clients = require('../controllers/client.server.controller.js'),
	clientDashbaord = require('../controllers/clientDashboard.server.controller.js'),
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
*/

router.route('/')
.get(clients.list)
.post(clients.createUser)

router.route('/:username')
  .get(clients.authenticate)
//  .put(tripRequest.update)
//  .delete(tripRequest.delete);

module.exports = router;
