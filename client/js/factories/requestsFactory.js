angular.module('requests', []).factory('Requests', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://localhost:8080/api/listings');
    },
	
                                       create: function(Newrequest) {
                                       return $http.post('/api/requests', Newrequest)
                                       },

    delete: function(id) {
            return $http.delete('/api/listings/'+ id);
	   /**TODO
        return result of HTTP delete method
       */

    }
  };

  return methods;
});
