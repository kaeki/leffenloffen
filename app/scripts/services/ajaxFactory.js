'use strict';

angular
  .module('leffenloffenApp')
    .factory('ajaxFactory', function ($http) {
        var urlBase = 'http://www.finnkino.fi/xml/';
        var proxy = 'http://users.metropolia.fi/~attesal/convert.php?endpoint=';
        var ajaxFunctions = {};


        ajaxFunctions.theatres = function () {
            return $http.get(proxy+encodeURIComponent(urlBase+'TheatreAreas/'));
        };
        ajaxFunctions.getMovies = function (area) {
            return $http.get(proxy+encodeURIComponent(urlBase+'Events/?area='+area));
        };
        ajaxFunctions.getSchedule = function (area) {
            return $http.get(proxy+encodeURIComponent(urlBase+'Schedule/?area='+area));
        };
        ajaxFunctions.getCity = function (lat, lon){
            return $http.get("http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lon+"&sensor=false");
        };


        return ajaxFunctions;
  });