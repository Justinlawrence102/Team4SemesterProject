angular.module('blogs', []).factory('Requests', function($http) {
  var methods = {
	
    getAll: function() {
     return $http.get('/api/blogs');
    },
    
    createPost: function(newPost) {
     return $http.post('/api/blogs', newPost);
     },
                
  };

  return methods;
});
