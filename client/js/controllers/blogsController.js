angular.module('blogs').controller('blogsController', ['$scope', 'Requests',  function($scope, Requests) {
         $scope.title = undefined;
         $scope.summary = undefined;
         $scope.body = undefined;
         $scope.featured = undefined;
         $scope.imageURL = undefined;
         $scope.isEditing = 0;
                                                       
    Requests.getAllBlogs().then(function(response) {
                    console.log('trying to get blog posts')
                    $scope.userRequest = response.data;
     }, function(error) {
         console.log('Unable to retrieve list of blogs:', error);
    });
         
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
