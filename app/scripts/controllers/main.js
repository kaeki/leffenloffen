'use strict';

/**
 * @ngdoc function
 * @name leffenloffenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leffenloffenApp
 */
angular.module('leffenloffenApp')
  .controller('MainCtrl', function ($scope, ajaxFactory) {
  	$scope.showTheatres = function(){
  		console.log('lol');
        var request = ajaxFactory.theatres();
        request.then(function(response){
            // tee vastauksella jotain
            $scope.theatreAreas = response.data;
            console.log(response.data);
            $scope.clicked = true;
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

  });
