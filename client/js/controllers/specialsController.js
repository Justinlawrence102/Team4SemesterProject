angular.module('specials').controller('specialsController', ['$scope', 'Requests',  function($scope, Requests) {
         $scope.title = undefined;
         $scope.summary = undefined;
         $scope.link = undefined;
         $scope.imageURL = undefined;
         $scope.isEditing = 0;
                                                       
    Requests.getAllSpecial().then(function(response) {
                    console.log('trying to get specials posts')
                    $scope.userRequest = response.data;
     }, function(error) {
         console.log('Could not get all specials', error);
    });
         
    $scope.submitNewPost = function() {
        var newSpecials = {title: $scope.title, summary: $scope.summary, link: $scope.link, imageURL: $scope.imageURL}
         Requests.createSpecial(newSpecials).then(function(response) {
         });
        //window.location =('/specials.html');

    }
    $scope.editPost = function() {
       var updatedSpecials = {title: $scope.title, summary: $scope.summary, link: $scope.link, imageURL: $scope.imageURL}
    Requests.editSpecial(updatedSpecials).then(function(response) {
                                        })
     window.location =('/specials.html');
                                                       }
   }
                                                                ]);
