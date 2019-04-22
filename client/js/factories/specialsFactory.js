angular.module('specials', []).factory('Requests', function($http) {
  var methods = {
    
    getAllSpecials: function() {
     return $http.get('/api/specials');
    },
    
    createSpecials: function(newPost) {
     return $http.post('/api/specials', newPost);
     },
                                    
    editSpecials: function(updatedSpecials){
                                    console.log('at special factory!')
      return $http.put('/api/specials', updatedSpecials);
    },
    deleteSpecials: function(specials){
      console.log('removing '+specials.title)
       return $http.delete('/api/specials/'+specials.title);
    },
  };

  return methods;
});
