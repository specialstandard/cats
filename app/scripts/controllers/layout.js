'use strict';

/**
 * @ngdoc function
 * @name catApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the catApp
 */
angular.module('catApp')
  .controller('LayoutCtrl', function ($scope, $location) {
    $scope.isActive = function(path){
		
		return $location.path() === path;
	}
  });
