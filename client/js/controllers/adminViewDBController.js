angular.module('recomendations').controller('adminViewDBController', ['$scope', 'Requests',  function($scope, Requests) {
    $scope.username = undefined;
    $scope.fullName = undefined;
    $scope.recTitle = undefined;
    $scope.recFlightName = undefined;
    $scope.recFlightLink = undefined;
    $scope.recFlightPrice = undefined;
    $scope.recHotelLink = undefined;
    $scope.recHotelPrice = undefined;
    $scope.recNotes = undefined;
    $scope.recDetails = undefined;
    $scope.recCruiseLink = undefined;
    $scope.recCruisePrice = undefined;
    $scope.departDate = undefined;
    $scope.stops = undefined;
   $scope.numPeople = undefined;
    $scope.budget = undefined;
    $scope.notes = undefined;
                                                            
    var firstName = sessionStorage.getItem('ClientFirstName');
    var lastName = sessionStorage.getItem('ClientLastName');
    $scope.fullName = firstName+' '+lastName
    $scope.username = sessionStorage.getItem('ClientUserName');
                                                                      
   
//
     $scope.submitRecomendation = function() {
     console.log('submiting a  request')
    var newRecomendation = {username: $scope.username, title: $scope.recTitle, flight: $scope.recFlightName, flightLink: $scope.recFlightLink, otherDetails: $scope.recDetails, notes: $scope.recNotes};
                                        //, recTitle: $scope.recTitle, recFlightLink: $scope.recFlightLink, recFlightPrice: $scope.recFlightPrice, recHotelLink: $scope.recHotelLink, recHotelPrice: $scope.recHotelPrice, recCruiseLink: $scope.recCruiseLink, recCruisePrice = $scope.recCruisePrice, recNotes: $scope.recNotes
            Requests.create(newRecomendation).then(function(response) {                                                          });
                                                                      }
                                                                      }
]);
