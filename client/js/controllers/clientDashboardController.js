angular.module('travelAgencyApp').controller('clientDashboardController', ['$scope', 'Requests',  function($scope, Requests) {
  $scope.userName = undefined;
  $scope.origin = undefined;
  $scope.departDate = undefined;
  $scope.stops = undefined;
  $scope.numPeople = undefined;
  $scope.budget = undefined;
  $scope.notes = undefined;

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
                                                                           
  var firstName = sessionStorage.getItem('ClientFirstName');
  var lastName = sessionStorage.getItem('ClientLastName');
  $scope.fullName = firstName+' '+lastName
                                                                           
  console.log('getting here in client dashboard controller')

    Requests.getAll().then(function(response) {
     console.log('trying to get all trips')
         var getData = response.data;
        $scope.userRequest = getData.sort((a, b) => (a.departDate < b.departDate) ? 1 : -1)
                           
    //      console.log('this is the numpeople: '+$scope.userRequest[0].stops[0].stopLocation)
                           
     }, function(error) {
        console.log('Unable to retrieve trip request:', error);
     });
    //call to get all recommendation
    Requests.getRecommendation().then(function(response) {
      console.log('getting recommendations');
        var getRec = response.data;
        $scope.userRec = getRec;

    }, function(error){
        console.log('Unable to get recommendations:', error);
    });
                                                                    
    $scope.editTrip = function() {
    console.log('editing listing')
    };
               

  }
]);
