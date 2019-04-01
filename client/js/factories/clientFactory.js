angular.module('clients', []).factory('Clients', function($http) {
  var methods = {

    getAll: function() {
      return $http.get('/api/clients');
    },
  
    create: function(newclient) {
      return $http.post('/api/clients', newclient)
    },

    authenticate: function(clientlogin) {
      return $http.post('/api/auth',clientlogin);
    }

  };
  return methods;
});