angular.module('requests', []).factory('Requests', function($http) {
  var methods = {

	
    getAll: function() {
    console.log('at client dashboard')
    var userName = sessionStorage.getItem('CurrentlyLoggedInUserName');
   // userName = "testingUser"
    return $http.get('/api/requests', {params: {userName: userName}});
    },

    getClientInfo: function() {
      var userName = sessionStorage.getItem('CurrentlyLoggedInUserName');
      //console.log('Username in factory: ', userName)
      
      //console.log('client info in factory', JSON.stringify($http.get('/api/clients', {params: {userName: userName}})));
      return $http.get('/api/clients', {params: {userName: userName}});
      },

    getRecommendation: function(){
    console.log('at getRecommendation in Factory');
    var userName = sessionStorage.getItem('CurrentlyLoggedInUserName');
    //console.log('Username in rec factory: ', userName)
    return $http.get('/api/clientRecommendations', {params: {userName: userName}});
    },

    update: function(client) {
      return $http.put('/api/clients', client);
    }

    
                
  };

  return methods;
});
