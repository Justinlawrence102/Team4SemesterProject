angular.module('recomendations', []).factory('Requests', function($http) {
  var methods = {
	
    getAllTrips: function() {
      return $http.get('/api/recomendations');
    },
     create: function(newRecomendation){
      return $http.get('/api/recomendations', newRecomendation);
    },
  };

  return methods;
});
