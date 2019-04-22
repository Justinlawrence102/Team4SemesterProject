angular.module('requests').controller('TripRequestController', ['$scope', 'Requests',
  function($scope, Requests) {
                                                            $scope.userName = sessionStorage.getItem('CurrentlyLoggedInUserName');
                                                            $scope.origin = undefined;
                                                            $scope.departDate = undefined;
                                                            $scope.returnDate = undefined;
                                                            $scope.stopLocation = undefined;
                                                            $scope.stopDate = undefined;
                                                            $scope.Stops = [];
                                                            $scope.numPeople = undefined;
                                                            $scope.budget = undefined;
                                                            $scope.notes = undefined;
                                                           // $scope.tableStops = [];

                                                            $scope.tableStops = [{
                                                                            stopLocation: undefined,
                                                                            stopDate: undefined
                                                                            }];

console.log('at controller')
                                                                
    $scope.submitRequest = function() {
    //  console.log('adding request with budget: '+ $scope.tableStops[1].stopLocation +'num people: '+$scope.numPeople);
         console.log('stops: '+ $scope.tableStops[0])
         console.log('location: '+$scope.tableStops[0].stopLocation)
         console.log('size: '+$scope.tableStops.length)
        var stops = [];
         for (i = 0; i < $scope.tableStops.length; i++) {
         var tempStop = {stopLocation: $scope.tableStops[i].stopLocation, stopDate: $scope.tableStops[i].stopDate}
            stops.push(tempStop)
           }
           var newRequest = {userName: $scope.userName, origin: $scope.origin, departDate: $scope.departDate, returnDate: $scope.returnDate, stops: stops, numPeople: $scope.numPeople, budget: $scope.budget, notes: $scope.notes};
      Requests.create(newRequest).then(function(response) {
      });
    //window.location =('/clientDashboard.html');
                                                                
                                                                };
 
   $scope.addNewStop = function () {
    console.log($scope.tableStops)

    var stop_id;
    var tableStop = $scope.tableStops;
                                                                console.log('size: '+tableStop.length)
    if(tableStop.length > 0){
       stop_id = tableStop[tableStop.length-1];
       stop_id = stop_id +1;
                                                        
                                                                
    }else{
      stop_id = 0;
    }
    var newStop = [{
       stop_id: stop_id,
//                   stopLocation: 'test',
//       stopDate: undefined
     }];
    $scope.tableStops.push(newStop);

       // var newStop = {stopLocation: $scope.stopLocation, stopDate: $scope.stopDate}
                                                              //  $scope.Stops.push(newStop)
                                                                
    };
                                                                
$scope.removeStop = function (index) {
    $scope.tableStops.splice(index,1);
    };
  }
]);
