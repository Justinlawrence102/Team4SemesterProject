angular.module('clients').controller('adminDashboardController', ['$scope', 'Requests',  function($scope, Requests) {
         $scope.userName = undefined;
         $scope.firstName = undefined;
         $scope.lastName = undefined;
                                                                
    Requests.getAllClients().then(function(response) {
console.log('trying to get users')
    $scope.userRequest = response.data;
     }, function(error) {
         console.log('Unable to retrieve list of users:', error);
    });
                                                                  
   $scope.showClient = function(client) {
    console.log('username: '+client)
     sessionStorage.setItem('ClientFirstName', client.firstname)
     sessionStorage.setItem('ClientLastName', client.lastname)
     sessionStorage.setItem('ClientUserName', client.username)
     sessionStorage.setItem('ClientNotes', client.notes)
                                                                  
     window.location =('/adminViewDB.html');
                                                                  };
                                                                  
   }
                                                                ]);
