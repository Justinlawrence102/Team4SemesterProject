angular.module('specials', []).factory('Requests', function($http) {


	var methods = {

		getAllSpecial: function() {
     	return $http.get('/api/specials');
     },
     	createSpecial: function(newSpecial) {
     	return $http.post('/api/specials', newSpecial);
     },

     	editSpecial: function(updatedSpecial){
      return $http.put('/api/specials', updatedSpecial);
    },

    };
	return methods;

});