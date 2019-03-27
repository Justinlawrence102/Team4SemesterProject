/* register the modules the application depends upon here*/
angular.module('requests', [])
angular.module('clientDashboard', [])
angular.module('addStops',[])
angular.module('clients', [])
/* register the application and inject all the necessary dependencies */
var app = angular.module('travelAgencyApp', ['requests', 'clients']);

console.log('here');
