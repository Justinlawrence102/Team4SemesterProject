angular.module('clients', []).factory('Clients', function($http) {
  var methods = {

                                      editNotes: function(notes) {
                                      var username = sessionStorage.getItem('ClientUserName');
                                      var data = {username: username, notes: notes}
                                      console.log("getting userName for In notesFact: "+username+ "notes are ")
                                      return $http.put('/api/clients', data);//, notes);
                                      }
//    editNote: function(notes) {
//     var username = sessionStorage.getItem('ClientUserName');
//     console.log("getting userName for POST: "+username)
//     return $http.put('/api/clients/'+username, notes);
//                                      }
  };
  return methods;
});
