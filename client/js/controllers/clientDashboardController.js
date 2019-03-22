angular.module('requests').controller('clientDashboardController', ['$scope', 'Requests',  function($scope, Requests) {
                                                            $scope.userName = "testingUser";
                                                            $scope.origin = undefined;
                                                            $scope.departDate = undefined;
                                                            
                                                            $scope.stops = undefined;
                                                            $scope.numPeople = undefined;
                                                            $scope.budget = undefined;
                                                            $scope.notes = undefined;
                                                                console.log('getting here')

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
