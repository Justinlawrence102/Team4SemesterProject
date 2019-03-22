/* register the modules the application depends upon here*/
angular.module('requests', [])
angular.module('clientDashboard', [])
angular.module('addStops',[])
/* register the application and inject all the necessary dependencies */
var app = angular.module('travelAgencyApp', ['requests']);

console.log('here')
