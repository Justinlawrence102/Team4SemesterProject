angular.module('clientDashboard').controller('clientDashboardController', ['$scope', 'TripRequests',
  function($scope, TripRequests) {
                                                            $scope.userName = "testingUser";
                                                            $scope.origin = undefined;
                                                            $scope.departDate = undefined;
                                                            
                                                            $scope.stops = undefined;
                                                            $scope.numPeople = undefined;
                                                            $scope.budget = undefined;
                                                            $scope.notes = undefined;
                                                                console.log('getting here')

    TripRequests.getAll().then(function(response) {
                           console.log('trying to get all trups')
        $scope.userRequest = response.data;
            }, function(error) {
            console.log('Unable to retrieve trip request:', error);
    });

  }
]);
