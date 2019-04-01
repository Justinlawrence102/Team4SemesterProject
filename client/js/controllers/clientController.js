angular.module('clients').controller('ClientController', ['$scope', 'Clients',
  function($scope, Clients) {
                                                            $scope.username = undefined;
                                                            $scope.password = undefined;
                                                            $scope.firstname = undefined;
                                                            $scope.lastname = undefined;
                                                            $scope.email = undefined;
                                                            $scope.tphone = undefined;

$scope.submit_user_request = function(){
    console.log('creating user: ' +$scope.username+ '...');

    var newUser = {
      username: $scope.username, 
      password: $scope.password, 
      firstname: $scope.firstname, 
      lastname: $scope.lastname, 
      email: $scope.email, 
      tphone: $scope.tphone};

    Clients.create(newUser).then(function(response){
        console.log(newUser.username + ' successfully created!');
    });
};

$scope.submit_authenticate = function(){
	console.log('authenticating ' +$scope.username+ '...');

	var newAuth = {
    username: $scope.username, 
    password: $scope.password};

	console.log("past newAuth of: " + newAuth.username);

	Clients.authenticate(newAuth).then(function(response){
		console.log("reached");
    //console.log(response.username);
	});
};

//Clients.getAll().then(function(response) {
   //console.log('trying to get all clients')
  // $scope.userRequest = response.data;
  // }, function(error) {
   //   console.log('Unable to retrieve trip request:', error);
   // });

}]);



