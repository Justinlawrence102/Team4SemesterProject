angular.module('blogs', []).factory('Requests', function($http) {
  var methods = {
	
    getAllBlogs: function() {
     return $http.get('/api/blogs');
    },
    
    createBlog: function(newPost) {
     return $http.post('/api/blogs', newPost);
     },
                                    
    editBlog: function(updatedBlog){
                                    console.log('at factory!')
      return $http.put('/api/blogs', updatedBlog);
    },
    deleteBlog: function(blog){
      console.log('removing '+blog.title)
       return $http.delete('/api/blogs/'+blog.title);
    },
  };

  return methods;
});
