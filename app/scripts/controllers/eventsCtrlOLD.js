'use strict';
angular.module('leffenloffenApp')

  .controller('eventsCtrl', function ($scope, ajaxFactory, teatteriService) {
    $scope.erhe = '';
    $scope.areaID = teatteriService.area.ID;
    $scope.showEvents = function(area){
        console.log(area);
        var request = ajaxFactory.getMovies(area);
        request.then(function(response){
            // tee vastauksella jotain
            $scope.eventsArray = response.data;
            console.log(area);
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

    $scope.teatteriName = teatteriService.area.Name;

    $scope.slide = function (dir) {
    $('#slider').carousel(dir);
    };
    if (teatteriService.area=null){
        $scope.erhe = true;
    };


  });
