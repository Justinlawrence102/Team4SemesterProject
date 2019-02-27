angular.module('requests', []).factory('Requests', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://localhost:8080/api/listings');
    },
	
	create: function(listing) {
      return $http.post('http://localhost:8080/api/listings', listing)
    },

    delete: function(id) {
            return $http.delete('http://localhost:8080/api/listings/'+ id);
	   /**TODO
        return result of HTTP delete method
       */

    }
  };

  return methods;
});
