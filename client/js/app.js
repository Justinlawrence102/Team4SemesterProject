/* register the modules the application depends upon here*/
angular.module('requests', [])
angular.module('clientDashboard', [])
angular.module('clients', [])
angular.module('recomendations', [])
angular.module('blogs', [])
//angular.module('addStops',[])

/* register the application and inject all the necessary dependencies */
var app = angular.module('travelAgencyApp', ['requests', 'clients', 'recomendations', 'blogs']);

console.log('here');
