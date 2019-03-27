angular.module('users').controller('adminDashboardController', ['$scope', 'Requests',  function($scope, Requests) {
                                                                $scope.userName = undefined;
                                                                $scope.firstName = undefined;
                                                                $scope.lastName = undefined;
                                                                
                                                                console.log('inside controllerx')
                                                                Requests.getAllClients().then(function(response) {
                                                                                              console.log('trying to get users')
                                                                                              $scope.userRequest = response.data;
                                                                                              }, function(error) {
                                                                                              console.log('Unable to retrieve list of users:', error);
                                                                                              });
                                                                }
                                                                ]);
