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

        return ajaxFunctions;
  });