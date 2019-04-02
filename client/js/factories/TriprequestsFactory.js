angular.module('requests', []).factory('Requests', function($http) {
  var methods = {
	
     create: function(Newrequest) {
         return $http.post('/api/requests', Newrequest)
                                 //      return $http.post('/api/requests', {params: {userName: userName} Newrequest:Newrequest})
        },
     getAll: function() {
       return $http.get('/api/requests');
       },

  };

  return methods;
});
