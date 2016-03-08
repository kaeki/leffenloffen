'use strict';

/**
 * @ngdoc function
 * @name leffenloffenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leffenloffenApp
 */
angular.module('leffenloffenApp')
  .controller('MainCtrl', function ($scope, $route) {
		$scope.reloadRoute = function() {
		   $route.reload();
		};
  });
