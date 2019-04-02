angular.module('travelAgencyApp').controller('homeController', ['$scope',
  function($scope)  {
   $scope.userName = sessionStorage.getItem('CurrentlyLoggedInUserName');
                                                                console.log('userName is: '+$scope.userName)
  }
	
    ]);
