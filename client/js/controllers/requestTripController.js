angular.module('requests').controller('TripRequestController', ['$scope', 'Requests',
  function($scope, Requests) {
                                                            $scope.userName = "testingUser";
                                                            $scope.origin = undefined;
                                                            $scope.departDate = undefined;
                                                            
                                                            $scope.stops = undefined;
                                                            $scope.numPeople = undefined;
                                                            $scope.budget = undefined;
                                                            $scope.notes = undefined;


    $scope.submitRequest = function() {
                                                                console.log('adding request with budget: '+$scope.budget+'num people: '+$scope.numPeople);
                                                            
      var newRequest = {userName: $scope.userName, origin: $scope.origin, departDate: $scope.departDate, stops: $scope.stops, numPeople: $scope.numPeople, budget: $scope.budget, notes: $scope.notes};
                                                            
      Requests.create(newRequest).then(function(response) {
      });
    };

  }
]);
