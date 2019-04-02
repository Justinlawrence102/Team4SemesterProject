angular.module('clients', []).factory('Requests', function($http) {
                                    var methods = {
                                    
                                    getAllClients: function() {
                                    return $http.get('/api/users');
                                    console.log('getting API data')
                                    },
                        
                                    };
                                    
                                    return methods;
                                    });
