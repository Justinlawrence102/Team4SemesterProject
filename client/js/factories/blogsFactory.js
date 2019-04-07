angular.module('blogs', []).factory('Requests', function($http) {
  var methods = {
	
    getAllBlogs: function() {
     return $http.get('/api/blogs');
    },
    
    createBlog: function(newPost) {
     return $http.post('/api/blogs', newPost);
     },
                                    
    editBlog: function(updatedBlog){
      return $http.put('/api/blogs', updatedBlog);
    },
  };

  return methods;
});
