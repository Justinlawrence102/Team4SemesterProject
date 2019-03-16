angular.module('requests').controller('RequestController', ['$scope', 'Requests',
  function($scope, Requests) {
                                                            $scope.firstName = undefined;
                                                            $scope.lastName = undefined;
                                                            $scope.origin = undefined;
                                                            $scope.destination = undefined;
                                                            $scope.email = undefined;
                                                            $scope.tphone = undefined;
                                                            $scope.returnDate = undefined;
                                                            $scope.departDate = undefined;
                                                            $scope.numPeople = undefined;
                                                            $scope.budget = undefined;
                                                            $scope.notes = undefined;
                                                            console.log('test '+$scope.firstName);

    /* Get all the listings, then bind it to the scope */
//    Requests.getAll().then(function(response) {
//      $scope.requests = response.data;
//
//
//    }, function(error) {
//      console.log('Unable to retrieve listings:', error);
//    });


    $scope.submitRequest = function() {
      console.log('adding request for '+$scope.firstName+' '+$scope.lastName);
     var newRequest = {origin: $scope.origin, destination: $scope.destination, returnDate: $scope.returnDate, departDate: $scope.departDate, numPeople: $scope.numPeople, budget: $scope.budget, notes: $scope.notes};
                                                            
      Requests.create(newRequest).then(function(response) {
      });
    };

  }
]);
