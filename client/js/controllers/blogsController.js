angular.module('blogs').controller('blogsController', ['$scope', 'Requests',  function($scope, Requests) {
         $scope.title = sessionStorage.getItem('tempBlogTitle');
         $scope.summary = sessionStorage.getItem('tempBlogSummary');
         $scope.body = sessionStorage.getItem('tempBlogBody');
         $scope.featured = sessionStorage.getItem('tempBlogfeatured');
         $scope.imageURL = sessionStorage.getItem('tempBlogImageURL');
         $scope.isEditing = sessionStorage.getItem('isEditing');
         $scope.userName = sessionStorage.getItem('CurrentlyLoggedInUserName');
$scope.testFeat = "true"
    Requests.getAllBlogs().then(function(response) {
                                console.log('trying to get blog posts: '+response.data)
                     var allBlogs = response.data;
                                $scope.allBlogs = allBlogs.reverse();
                                $scope.featuredBlogs = []
                                var counter = 0
                    for (i = 0; i < $scope.allBlogs.length; i++) {
                            if ($scope.allBlogs[i].featured == 1) {
                                    $scope.featuredBlogs.push($scope.allBlogs[i])
                                counter ++

                                }
                            if (counter == 6){
                                break;
                                }
                    }
     }, function(error) {
         console.log('Unable to retrieve list of blogs:', error);
    });
                                                    
    $scope.viewBlog = function(blogPost) {
          console.log("clicked!")

          sessionStorage.setItem('tempBlogTitle', blogPost.title)
          sessionStorage.setItem('tempBlogSummary', blogPost.summary)
          sessionStorage.setItem('tempBlogBody', blogPost.body)
          sessionStorage.setItem('tempBlogImageURL', blogPost.imageURL)
          sessionStorage.setItem('tempBlogfeatured', blogPost.featured)
                                                       
          console.log('HERE ' + blogPost.title);

          //Added to fix facebook sharing
          Requests.getBlog(blogPost).then(function(response) {
            console.log('reached get blog in blogs ctrl');
             window.location =('/api/blogs/ ' + blogPost.title + 'viewBlogs.html');
        //      console.log('reached return of get blog in view blog with title = ' + response.blog.title);
          });

          //Previous method, loading page without blog title in URL
         // window.location =('/viewBlogs.html');
     }

     $scope.goToNewPost = function() {
         sessionStorage.setItem('tempBlogTitle', "")
         sessionStorage.setItem('tempBlogSummary', "")
         sessionStorage.setItem('tempBlogBody', "")
         sessionStorage.setItem('tempBlogImageURL', "")
         sessionStorage.setItem('isEditing', 0)
         sessionStorage.setItem('tempBlogfeatured', 0)
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
