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

  //$scope.firstName = sessionStorage.getItem('CurrentlyLoggedInFirstName')    

  console.log('getting here in client dashboard controller')

  
      $scope.userName = sessionStorage.getItem('CurrentlyLoggedInUserName')     

    Requests.getAll().then(function(response) {
     console.log('trying to get all trips')
         var getData = response.data;
        $scope.userRequest = getData.sort((a, b) => (a.departDate < b.departDate) ? 1 : -1)         
    //      console.log('this is the numpeople: '+$scope.userRequest[0].stops[0].stopLocation)
                           
     }, function(error) {
        console.log('Unable to retrieve trip request:', error);
     });
     
     //Call to get Client Info
     Requests.getClientInfo().then(function(response) {
       console.log('getting info');
       var getInfo = response.data;
       $scope.userInfo = getInfo;
       var userName = sessionStorage.getItem('CurrentlyLoggedInUserName');
       for (i = 0; i < $scope.userInfo.length; i++) {
         if ($scope.userInfo[i].username == userName) {
           num = i;
         }
       }
       
       $scope.firstName = $scope.userInfo[num].firstname;
       sessionStorage.setItem('CurrentlyLoggedInFirstName',$scope.userInfo[num].firstname);
       $scope.lastName = $scope.userInfo[num].lastname;
       sessionStorage.setItem('CurrentlyLoggedInLastName', $scope.userInfo[num].lastname);
       $scope.email = $scope.userInfo[num].email;
       sessionStorage.setItem('CurrentlyLoggedInEmail', $scope.userInfo[num].email);
       $scope.tphone = $scope.userInfo[num].tphone;
       sessionStorage.setItem('CurrentlyLoggedInPhone', $scope.userInfo[num].tphone);
       console.log('userinfo: ' + JSON.stringify($scope.userInfo[num].firstname));
     }, function(error){
       console.log('Unable to get client info:', error);
      
     });

     //$scope.firstName = sessionStorage.getItem('CurrentlyLoggedInFirstName')

    //call to get all recommendation
    Requests.getRecommendation().then(function(response) {
      console.log('getting recommendations');
        var getRec = response.data;
        $scope.userRec = getRec;
               //console.log('userrecs: ' + JSON.stringify($scope.userRec));
    }, function(error){
        console.log('Unable to get recommendations:', error);
    });
                                                                    
    $scope.editTrip = function() {
    console.log('editing listing')
    };
               

  }
]);
