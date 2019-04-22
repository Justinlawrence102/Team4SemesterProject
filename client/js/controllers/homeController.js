angular.module('travelAgencyApp').controller('homeController', ['$scope',
  function($scope)  {
     var user = sessionStorage.getItem('CurrentlyLoggedInUserName');
   $scope.userName = String(user);
   console.log('userName is: '+$scope.userName)
   console.log('type of username is: ' + typeof $scope.userName);
   $scope.origin = sessionStorage.getItem('homeOrigin');
   $scope.departDate = sessionStorage.getItem('homeDepartDate');
   
$scope.goToTripRequest = function() {
     console.log('going!')
     window.location =('/triprequest.html');
  };

  $scope.logout = function() {
   console.log('reaches here to logout');
   $scope.userName = null;
   console.log(typeof $scope.userName);
   sessionStorage.setItem('CurrentlyLoggedInUserName', $scope.userName);
   window.location =('/home.html');
 };

                                                                
  }    ]);
