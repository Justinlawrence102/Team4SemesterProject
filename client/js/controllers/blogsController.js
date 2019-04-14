angular.module('blogs').controller('blogsController', ['$scope', 'Requests',  function($scope, Requests) {
         $scope.title = sessionStorage.getItem('tempBlogTitle');
         $scope.summary = sessionStorage.getItem('tempBlogSummary');
         $scope.body = sessionStorage.getItem('tempBlogBody');;
         $scope.featured = undefined;
         $scope.imageURL = sessionStorage.getItem('tempBlogImageURL');;
         $scope.isEditing = 0;
                                                       
    Requests.getAllBlogs().then(function(response) {
                    console.log('trying to get blog posts')
                    $scope.userRequest = response.data;
     }, function(error) {
         console.log('Unable to retrieve list of blogs:', error);
    });
                                                       
    $scope.viewBlog = function(blogPost) {
          console.log("clicked!")
          sessionStorage.setItem('tempBlogTitle', blogPost.title)
          sessionStorage.setItem('tempBlogSummary', blogPost.summary)
          sessionStorage.setItem('tempBlogBody', blogPost.body)
          sessionStorage.setItem('tempBlogImageURL', blogPost.imageURL)
                                                       
          window.location =('/newBlogSubmission.html');
     }
                                                       
    $scope.submitNewPost = function() {
        var newBlog = {title: $scope.title, summary: $scope.summary, body: $scope.body, featured: $scope.featured, imageURL: $scope.imageURL}
         Requests.createBlog(newBlog).then(function(response) {
         });
        window.location =('/blogs.html');
    }
                                                       
    $scope.editPost = function() {
       var updatedBlog = {title: $scope.title, summary: $scope.summary, body: $scope.body, featured: $scope.featured, imageURL: $scope.imageURL}
    Requests.editBlog(updatedBlog).then(function(response) {
                                        })
     window.location =('/blogs.html');
                                                       }
   }
                                                                ]);
