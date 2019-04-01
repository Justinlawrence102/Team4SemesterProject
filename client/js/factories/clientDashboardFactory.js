angular.module('requests', []).factory('Requests', function($http) {
  var methods = {
	
    getAll: function() {
    console.log('at client dashboard')
    var userName = sessionStorage.getItem('CurrentlyLoggedInUserName');
   // userName = "testingUser"
    return $http.get('/api/requests', {params: {userName: userName}});
    },
    
                
  };

  return methods;
});
