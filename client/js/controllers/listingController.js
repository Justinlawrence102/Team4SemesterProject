angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
                                                            
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
                        
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });


    $scope.addListing = function() {
      
    };

    $scope.deleteListing = function(index, id) {
     
    };

    $scope.showDetails = function(index) {
     
    };
  }
]);
