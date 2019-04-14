angular.module('blogs').controller('blogsController', ['$scope', 'Requests',  function($scope, Requests) {
         $scope.title = sessionStorage.getItem('tempBlogTitle');
         $scope.summary = sessionStorage.getItem('tempBlogSummary');
         $scope.body = sessionStorage.getItem('tempBlogBody');
         $scope.featured = undefined;
         $scope.imageURL = sessionStorage.getItem('tempBlogImageURL');
         $scope.isEditing = sessionStorage.getItem('isEditing');
         $scope.userName = sessionStorage.getItem('CurrentlyLoggedInUserName');

    Requests.getAllBlogs().then(function(response) {
                    console.log('trying to get blog posts')
                     var allBlogs = response.data;
                                $scope.allBlogs = allBlogs.reverse();
     }, function(error) {
         console.log('Unable to retrieve list of blogs:', error);
    });
                                                    
    $scope.viewBlog = function(blogPost) {
          console.log("clicked!")
          sessionStorage.setItem('tempBlogTitle', blogPost.title)
          sessionStorage.setItem('tempBlogSummary', blogPost.summary)
          sessionStorage.setItem('tempBlogBody', blogPost.body)
          sessionStorage.setItem('tempBlogImageURL', blogPost.imageURL)
                                                       
          window.location =('/viewBlogs.html');
     }
     $scope.goToNewPost = function() {
         sessionStorage.setItem('tempBlogTitle', "")
         sessionStorage.setItem('tempBlogSummary', "")
         sessionStorage.setItem('tempBlogBody', "")
         sessionStorage.setItem('tempBlogImageURL', "")
         sessionStorage.setItem('isEditing', 0)
        window.location =('/newBlogSubmission.html');
    }
    $scope.goToEditPost = function() {
        sessionStorage.setItem('isEditing', 1)
        window.location =('/newBlogSubmission.html');
     }
                                                       
    $scope.submitNewPost = function() {
        var newBlog = {title: $scope.title, summary: $scope.summary, body: $scope.body, featured: $scope.featured, imageURL: $scope.imageURL}
         Requests.createBlog(newBlog).then(function(response) {
         });
        window.location =('/blogs.html');
    }
                                                       
    $scope.editPost = function() {
       console.log("editing post!!!")
       var updatedBlog = {title: $scope.title, summary: $scope.summary, body: $scope.body, featured: $scope.featured, imageURL: $scope.imageURL}
    Requests.editBlog(updatedBlog).then(function(response) {
                                        })
     window.location =('/blogs.html');
                                                       }
    $scope.deletePost = function(){
       var deletingBlog = {title: $scope.title}
       Requests.deleteBlog(deletingBlog).then(function(response) {
                                              })
   }
                                                       }                                                           ]);
