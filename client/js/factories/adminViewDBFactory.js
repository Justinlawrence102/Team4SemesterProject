angular.module('recommendations', []).factory('Requests', function($http) {
                                             var methods = {
                                             
//    getAllTrips: function() {
//        return $http.get('/api/recomendations');
//     },
                                            
     getAll: function() {
        var ClientUserName = sessionStorage.getItem('ClientUserName');
         console.log("getting userName: "+ClientUserName)
         return $http.get('/api/requests', {params: {userName: ClientUserName}});
        },

     //getRecommendation: its never used here, added it to prevent errors on admin side   
    getRecommendation: function(){
    console.log('at getRecommendation in Factory');
    var userName = sessionStorage.getItem('CurrentlyLoggedInUserName');
    return $http.get('/api/clientRecommendations', {params: {userName: userName}});
    },
                                             
      create: function(newRecommendation) {
          console.log("submit new recommendation")
          return $http.post('/api/recommendations', newRecommendation);
                                             },
                                             };
                                             
                                             return methods;
                                             });
