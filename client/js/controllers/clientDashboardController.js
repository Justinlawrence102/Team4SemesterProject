angular.module('travelAgencyApp').controller('clientDashboardController', ['$scope', 'Requests',  function($scope, Requests) {
  $scope.userName = "TESTJustin";
  $scope.origin = undefined;
  $scope.departDate = undefined;

  $scope.stops = undefined;
  $scope.numPeople = undefined;
  $scope.budget = undefined;
  $scope.notes = undefined;
  
  console.log('getting here in client dashboard controller')

    Requests.getAll().then(function(response) {
     console.log('trying to get all trips')
         $scope.userRequest = response.data;
     }, function(error) {
        console.log('Unable to retrieve trip request:', error);
     });
                                                                    
    $scope.editTrip = function() {
    console.log('editing listing')
    };

  }
]);
