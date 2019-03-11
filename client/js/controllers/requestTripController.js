angular.module('requests').controller('RequestController', ['$scope', 'Requests',
  function($scope, Requests) {
                                                            $scope.firstName = undefined;
                                                            $scope.lastName = undefined;
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
    };

  }
]);
