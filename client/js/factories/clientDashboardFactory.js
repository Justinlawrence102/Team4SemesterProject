angular.module('requests', []).factory('clientDashboard', function($http) {
  var methods = {
	
    getAll: function() {
      return $http.get('/api/requests');
    },
  };

  return methods;
});
