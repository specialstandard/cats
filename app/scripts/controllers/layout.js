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
		console.log('path: ', path)
		console.log('$location.path(): ', $location.path())
		return $location.path() === path;
	}
  });
