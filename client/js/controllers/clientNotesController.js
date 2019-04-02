angular.module('travelAgencyApp').controller('clientNoteController', ['$scope', 'Clients',  function($scope, Clients) {
    $scope.notes = sessionStorage.getItem('ClientNotes');
                                                            
    $scope.username = sessionStorage.getItem('ClientUserName');
    
   
//
     $scope.editNotes = function() {
     console.log('editing a note')
      Clients.editNotes($scope.notes).then(function(response) {                                                          });
    sessionStorage.setItem('ClientNotes', $scope.notes)
          window.location.reload(true);
                                                               };
  }
]);
