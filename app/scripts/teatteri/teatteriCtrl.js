'use strict';

angular.module('leffenloffenApp')

  .controller('teatteriCtrl', function ($scope, ajaxFactory) {
    
    $scope.showTheatres = function(){
        var request = ajaxFactory.theatres();
        request.then(function(response){
            // tee vastauksella jotain
            $scope.theatreAreas = response.data;
            
            console.log($scope.theatreAreas);
            /*
            // To store a value
            var loggedIn = JSON.stringify(response.data);   
            window.localStorage.setItem('user', loggedIn);
            */
          }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
    $scope.showTheatres();

  });
