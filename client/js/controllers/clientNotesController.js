angular.module('travelAgencyApp').controller('clientNoteController', ['$scope', 'Clients',  function($scope, Clients) {
    $scope.notes = sessionStorage.getItem('ClientNotes');
                                                            
    $scope.username = sessionStorage.getItem('ClientUserName');
    
   
//
     $scope.editNotes = function() {
     console.log('editing a note')
      Clients.editNote($scope.notes).then(function(response) {                                                          });
          window.location.reload(true);
                                                               };
  }
]);
