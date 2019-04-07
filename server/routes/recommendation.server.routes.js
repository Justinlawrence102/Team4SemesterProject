
/* Dependencies */
var 
	recommendation = require('../controllers/recommendation.server.controller.js'),
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
console.log("HERE at recommendation routes");
router.route('/')
.get(recommendation.getRec)


module.exports = router;