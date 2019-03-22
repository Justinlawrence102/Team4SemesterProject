angular.module('requests', []).factory('Requests', function($http) {
  var methods = {
	
    getAll: function() {
      return $http.get('/api/requests');
    },
  };

  return methods;
});
