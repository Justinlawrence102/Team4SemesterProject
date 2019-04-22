angular.module('clients').controller('ClientController', ['$scope', 'Clients',
  function($scope, Clients) {
                                                            $scope.username = undefined;
                                                            $scope.password = undefined;
                                                            $scope.firstname = undefined;
                                                            $scope.lastname = undefined;
                                                            $scope.email = undefined;
                                                            $scope.tphone = undefined;
                                                            $scope.holder = 'Username';

                                            console.log("Current username: " + $scope.username);                
                                                            

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
   window.location =('/login.html');
};

$scope.submit_authenticate = function(){
	console.log('authenticating ' +$scope.username+ '...');
	var newAuth = {
    username: $scope.username, 
    password: $scope.password
};

	console.log("past newAuth of: " + newAuth.username);

	Clients.authenticate(newAuth).then(function(response){
                                       if (response.status == 401){
                                       res.send(401);
                                       console.log('failed login')
                                       }
                                       else {
                                       sessionStorage.setItem('CurrentlyLoggedInUserName', newAuth.username)
                                       if (newAuth.username == 'admin'){
                                       window.location =('/adminDashboard.html');
                                       }
                                       else {
                                            window.location =('/clientDashboard.html');
                                       }
                                       console.log('sucess')
                                       }

    //console.log(response.username);
	});
};

//$scope.firstName = sessionStorage.getItem('CurrentlyLoggedInFirstName');
//console.log('firstname: ' + JSON.stringify($scope.firstName));


//$scope.username = sessionStorage.getItem('CurrentlyLoggedInUserName')
//Clients.getAll().then(function(response) {
   //console.log('trying to get all clients')
  // $scope.userRequest = response.data;
  // }, function(error) {
   //   console.log('Unable to retrieve trip request:', error);
   // });

}]);



