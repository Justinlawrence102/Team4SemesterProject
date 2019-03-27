angular.module('recomendations').controller('adminViewDBController', ['$scope', 'Requests',  function($scope, Requests) {
                                                            $scope.userName = "testingUser";
                                                            $scope.recTitle = undefined;
                                                            $scope.recFlightLink = undefined;
                                                            $scope.recFlightPrice = undefined;
                                                            $scope.recHotelLink = undefined;
                                                            $scope.recHotelPrice = undefined;
                                                            $scope.recNotes = undefined;
                                                            $scope.recCruiseLink = undefined;
                                                            $scope.recCruisePrice = undefined;
                                                                    
                                                                    
                                                            $scope.departDate = undefined;
                                                            $scope.stops = undefined;
                                                            $scope.numPeople = undefined;
                                                            $scope.budget = undefined;
                                                            $scope.notes = undefined;

  Requests.getAllTrips().then(function(response) {
   console.log('trying to get all trips')
   $scope.userRequest = response.data;
      }, function(error) {
        console.log('Unable to retrieve trip request:', error);
           });
                                                                    
    $scope.submitRecomendation = function() {
         console.log('submiting a  request')
     var newRecomendation = {userName: $scope.userName, recTitle: $scope.recTitle, recFlightLink: $scope.recFlightLink, recFlightPrice: $scope.recFlightPrice, recHotelLink: $scope.recHotelLink, recHotelPrice: $scope.recHotelPrice, recCruiseLink: $scope.recCruiseLink, $scope.recCruisePrice = recCruisePrice, recNotes: $scope.recNotes};
        };
        Requests.create(newRecomendation).then(function(response) {

 
  }
]);
