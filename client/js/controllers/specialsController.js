angular.module('specials').controller('specialsController', ['$scope', 'Requests',  function($scope, Requests) {
         $scope.title = sessionStorage.getItem('tempSpecialTitle');
         $scope.summary = sessionStorage.getItem('tempSpecialSummary');
         $scope.link = sessionStorage.getItem('tempSpecialLink');
         $scope.featured = sessionStorage.getItem('tempSpecialfeatured');
         $scope.imageURL = sessionStorage.getItem('tempSpecialImageURL');
         $scope.isEditing = sessionStorage.getItem('isEditing');
        $scope.price = sessionStorage.getItem('tempSpecialPrice')
         $scope.userName = sessionStorage.getItem('CurrentlyLoggedInUserName');
$scope.testFeat = "true"
    Requests.getAllSpecials().then(function(response) {
                    console.log('trying to get specials posts')
                     var allSpecials = response.data;
                                $scope.allSpecials = allSpecials.reverse();
                                $scope.featuredSpecials = []
                                var counter = 0
                    for (i = 0; i < $scope.allSpecials.length; i++) {
                            if ($scope.allSpecials[i].featured == 1) {
                                    $scope.featuredSpecials.push($scope.allSpecials[i])
                                counter ++

                                }
                            if (counter == 6){
                                break;
                                }
                    }
     }, function(error) {
         console.log('Unable to retrieve list of specials:', error);
    });
                                                    
    $scope.viewSpecial = function(specialPost) {
          console.log("clicked! "+specialPost.price)
          sessionStorage.setItem('tempSpecialTitle', specialPost.title)
          sessionStorage.setItem('tempSpecialSummary', specialPost.summary)
          sessionStorage.setItem('tempSpecialLink', specialPost.link)
          sessionStorage.setItem('tempSpecialImageURL', specialPost.imageURL)
          sessionStorage.setItem('tempSpecialfeatured', specialPost.featured)
        sessionStorage.setItem('tempSpecialPrice', specialPost.price)
                                                       
          window.location =('/viewSpecials.html');
     }
     $scope.goToNewPost = function() {
         sessionStorage.setItem('tempSpecialTitle', "")
         sessionStorage.setItem('tempSpecialSummary', "")
         sessionStorage.setItem('tempSpecialLink', "")
         sessionStorage.setItem('tempSpecialImageURL', "")
         sessionStorage.setItem('isEditing', 0)
         sessionStorage.setItem('tempSpecialfeatured', 0)
         sessionStorage.setItem('tempSpecialPrice', 0)
        window.location =('/newSpecialSubmission.html');
    }
    $scope.goToEditPost = function() {
        sessionStorage.setItem('isEditing', 1)
                                                             console.log('editing')
        window.location =('/newSpecialSubmission.html');
     }
                                                       
    $scope.submitNewPost = function() {
         var newSpecial = {title: $scope.title, summary: $scope.summary, link: $scope.link, featured: $scope.featured, imageURL: $scope.imageURL, price: $scope.price}
         Requests.createSpecials(newSpecial).then(function(response) {
         });
        window.location =('/specials.html');
    }
                                                       
    $scope.editPost = function() {
       console.log("editing special post!!!")
       var updatedSpecial = {title: $scope.title, summary: $scope.summary, link: $scope.link, featured: $scope.featured, imageURL: $scope.imageURL, price: $scope.price}
    Requests.editSpecials(updatedSpecial).then(function(response) {
                                        })
     window.location =('/specials.html');
                                                       }
    $scope.deletePost = function(){
       var deletingSpecial = {title: $scope.title}
       Requests.deleteSpecial(deletingSpecial).then(function(response) {
                                              })
   }
                                                       }                                                           ]);
