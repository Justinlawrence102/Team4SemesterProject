angular.module('requests').controller('addStopsController', ['$scope', 'Requests',
  function($scope, Requests)  {
    $scope.tableStops = [];

    $scope.addNewStop = function () {
        var stop_id;
        var tableStops = $scope.tableStops;
        if(tableStops.length > 0){
            stop_id = tableStops[tableStops.length-1];
            stop_id = stop_id +1;
        }else{
            stop_id = 0;
        }
        $scope.tableStops.push(stop_id);
    };

    $scope.removeStop = function (index) {
        $scope.tableStops.splice(index,1);
    };
  }
	
    ]);