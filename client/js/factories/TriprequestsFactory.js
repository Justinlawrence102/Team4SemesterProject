angular.module('requests', []).factory('Requests', function($http) {
  var methods = {
	
     create: function(Newrequest) {
         return $http.post('/api/requests', Newrequest)
        },
     getAll: function() {
       return $http.get('/api/requests');
       },

  };

  return methods;
});
