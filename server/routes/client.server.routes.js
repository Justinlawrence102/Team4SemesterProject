/* Dependencies */
var clients = require('../controllers/client.server.controller.js'),
	clientDashboard = require('../controllers/clientDashboard.server.controller.js'),
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
*/

router.route('/')
.get(clients.list)
.post(clients.createUser)
.put(clients.editNotes)

router.route('/:username')
  .get(clients.authenticate)
  //.put(clients.editNotes)

module.exports = router;
