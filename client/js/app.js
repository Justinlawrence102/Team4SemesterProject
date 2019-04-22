/* register the modules the application depends upon here*/
angular.module('requests', [])
angular.module('clientDashboard', [])
angular.module('clients', [])
angular.module('recommendations', [])
angular.module('blogs', [])
angular.module('specials', [])
//angular.module('addStops',[])

/* register the application and inject all the necessary dependencies */
var app = angular.module('travelAgencyApp', ['requests', 'clients', 'recommendations', 'blogs', 'specials']);

console.log('here');
