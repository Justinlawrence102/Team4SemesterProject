angular.module('recommendations').controller('adminViewDBController', ['$scope', 'Requests',  function($scope, Requests) {
    $scope.userName = undefined;
    $scope.fullName = undefined;
    $scope.recTitle = undefined;
    $scope.recFlightName = undefined;
    $scope.recFlightLink = undefined;
    $scope.recFlightPrice = undefined;
    $scope.recHotelName = undefined;
    $scope.recHotelLink = undefined;
    $scope.recHotelPrice = undefined;
    $scope.recDetails = undefined;
    $scope.recCruiseName = undefined;
    $scope.recCruiseLink = undefined;
    $scope.recCruisePrice = undefined;
                                                                      
    $scope.departDate = undefined;
    $scope.stops = undefined;
   $scope.numPeople = undefined;
    $scope.budget = undefined;
    $scope.notes = undefined;
                                                            
   
    $scope.userName = sessionStorage.getItem('ClientUserName');
    var departDate = sessionStorage.getItem('departureDate');
   
//
     $scope.submitRecommendation = function() {
     console.log('submiting a  request '+departDate)
     var newRecommendation = {userName: $scope.userName, title: $scope.recTitle, departDate: departDate, flight: $scope.recFlightName, flightLink: $scope.recFlightLink, flightPrice: $scope.recFlightPrice, hotel: $scope.recHotelName, hotelLink: $scope.recHotelLink, hotelPrice: $scope.recHotelPrice, cruise: $scope.recCruiseName, cruiseLink: $scope.recCruiseLink, cruisePrice: $scope.recCruisePrice, otherDetails: $scope.recDetails};
            Requests.create(newRecommendation).then(function(response) {                                                          });
         // window.location.reload(true);
        }
  }
]);
