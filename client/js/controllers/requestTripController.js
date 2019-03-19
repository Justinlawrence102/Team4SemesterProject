angular.module('requests').controller('TripRequestController', ['$scope', 'Requests',
  function($scope, Requests) {
                                                            $scope.userName = "testingUser";
                                                            $scope.origin = undefined;
                                                            $scope.departDate = undefined;
                                                            
                                                            $scope.stops = undefined;
                                                            $scope.numPeople = undefined;
                                                            $scope.budget = undefined;
                                                            $scope.notes = undefined;

console.log('at controller')
    $scope.submitRequest = function() {
                                                                console.log('adding request with budget: '+$scope.budget+'num people: '+$scope.numPeople);
                                                            
      var newRequest = {userName: $scope.userName, origin: $scope.origin, departDate: $scope.departDate, stops: $scope.stops, numPeople: $scope.numPeople, budget: $scope.budget, notes: $scope.notes};
                                                            
      Requests.create(newRequest).then(function(response) {
      });
    };
                                                                
  Requests.getAll().then(function(response) {
     console.log('trying to get all trips')
     $scope.userRequest = response.data;
     }, function(error) {
        console.log('Unable to retrieve trip request:', error);
      });

  }
]);
