angular.module('requests').controller('RequestController', ['$scope', 'Requests',
  function($scope, Requests) {
                                                            $scope.name = undefined;
                                                            $scope.travelDates = undefined;
                                                            $scope.budget = undefined;
                                                            $scope.numTravelers = undefined;
                                                            $scope.notes = undefined;
    /* Get all the listings, then bind it to the scope */
    Requests.getAll().then(function(response) {
      $scope.requests = response.data;
                           
                        
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });


    $scope.submitRequest = function() {
      console.log('adding new request from user')
    };

  }
]);
