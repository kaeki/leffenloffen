
'use strict';

angular
  .module('leffenloffenApp')
    .directive('teatterit', function() {
    	console.log('tirehtööri');
        return {
            restrict: 'E',
            templateUrl: 'views/teatteri.html'
        };
});