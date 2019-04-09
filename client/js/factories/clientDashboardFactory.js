angular.module('requests', []).factory('Requests', function($http) {
  var methods = {

	
    getAll: function() {
    console.log('at client dashboard')
    var userName = sessionStorage.getItem('CurrentlyLoggedInUserName');
   // userName = "testingUser"
    return $http.get('/api/requests', {params: {userName: userName}});
    },

    getRecommendation: function(){
    console.log('at getRecommendation in Factory');
    var userName = sessionStorage.getItem('CurrentlyLoggedInUserName');
    return $http.get('/api/clientRecommendations', {params: {userName: userName}});
    },

    
                
  };

  return methods;
});
