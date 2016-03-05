
'use strict';

angular
  .module('leffenloffenApp')
    .directive('leffat', function() {
        return {
            restrict: 'E',
            templateUrl: 'scripts/leffat/events.html'
        };
});