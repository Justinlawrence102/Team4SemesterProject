angular.module('travelAgencyApp').controller('homeController', ['$scope',
  function($scope)  {
   $scope.userName = sessionStorage.getItem('CurrentlyLoggedInUserName');
   console.log('userName is: '+$scope.userName)
   $scope.origin = sessionStorage.getItem('homeOrigin');
   $scope.departDate = sessionStorage.getItem('homeDepartDate');
   
$scope.goToTripRequest = function() {
     console.log('going!')
     window.location =('/triprequest.html');
  }

                                                                
  }    ]);
