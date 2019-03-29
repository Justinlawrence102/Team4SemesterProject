angular.module('requests', []).factory('Requests', function($http) {
  var methods = {
	
    getAll: function() {
    var userName = sessionStorage.getItem('ClientUserName');
      return $http.get('/api/requests');
    },
  };

  return methods;
});
