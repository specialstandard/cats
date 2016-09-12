'use strict';

/**
 * @ngdoc function
 * @name catApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the catApp
 */
angular.module('catApp')
  .controller('ContactCtrl', ['$scope', function ($scope) {
    $scope.name = 'Brian Ardito';
	$scope.phone = '0449279099';
	$scope.email = 'Brian.Ardito@gmail.com';
  }]);
