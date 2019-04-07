angular.module('spcials', []).factory('Requests', function($http) {


	var methods = {

		getAll: function() {
     	return $http.get('/api/specials');
     },
     	createPost: function(newSpecial) {
     	return $http.post('/api/specials', newSpecial);
     },

    };
	return methods;

});