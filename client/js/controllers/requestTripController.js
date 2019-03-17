angular.module('requests').controller('RequestController', ['$scope', 'Requests',
  function($scope, Requests) {
                                                            
                                                            $scope.origin = undefined;
                                                            $scope.departDate = undefined;
                                                            
                                                            $scope.stops = undefined;
                                                            $scope.numPeople = undefined;
                                                            $scope.budget = undefined;
                                                            $scope.notes = undefined;


    $scope.submitRequest = function() {
      console.log('adding request for '+$scope.firstName+' '+$scope.lastName);
                                                            
     var newRequest = {origin: $scope.origin, departDate: $scope.departDate, stops: $scope.stops, numPeople: $scope.numPeople, budget: $scope.budget, notes: $scope.notes};
                                                            
      Requests.create(newRequest).then(function(response) {
      });
    };

  }
]);
