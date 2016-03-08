'use strict';

angular.module('leffenloffenApp')

  .controller('teatteriCtrl', function ($scope, ajaxFactory, teatteriService) {
    
    $scope.showTheatres = function(){
        var request = ajaxFactory.theatres();
        request.then(function(response){
            // tee vastauksella jotain
            $scope.tArray = response.data;
            
            console.log(response.data);
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
    //$scope.showEvents = teatteriService.showEvents;
    $scope.showEvents = function(){
        teatteriService.showEvents();
        console.log(teatteriService);
    };
    $scope.showLocationEvents = function(){
        teatteriService.showLocationEvents();
    };
    $scope.showSelectValue = function(mySelect) {
        teatteriService.area = JSON.parse(mySelect);
        console.log(teatteriService.area);
    };

    var onSuccess = function(position) {
        teatteriService.setVariable('lat', position.coords.latitude);
        teatteriService.setVariable('lon', position.coords.longitude);
        teatteriService.setVariable('locate', true);
        $scope.locate = teatteriService.locate;
        console.log(teatteriService.lat+", "+teatteriService.lon);
    };
    var onError = function(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
    };

    $scope.getLocation = function() {
        console.log('lol');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    };

});

