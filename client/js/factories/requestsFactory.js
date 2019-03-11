angular.module('requests', []).factory('Requests', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://localhost:8080/api/listings');
    },
	
	create: function(Newrequest) {
                                       console.log('submitting post: '+Newrequest.firstName)
      return $http.post('http://localhost:8080/api/requests', Newrequest)
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
