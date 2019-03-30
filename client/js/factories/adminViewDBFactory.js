angular.module('recomendations', []).factory('Requests', function($http) {
                                             var methods = {
                                             
//    getAllTrips: function() {
//        return $http.get('/api/recomendations');
//     },
                                             
     getAll: function() {
        var ClientUserName = sessionStorage.getItem('ClientUserName');
         console.log("getting userName: "+ClientUserName)
         return $http.get('/api/requests', {params: {userName: ClientUserName}});
        },
                                             
      create: function(newRecomendation){
          console.log("submit new recomendation")
          return $http.post('/api/recomendations', newRecomendation);
                                             },
                                             };
                                             
                                             return methods;
                                             });
