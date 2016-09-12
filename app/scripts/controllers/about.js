'use strict';

/**
 * @ngdoc function
 * @name catApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the catApp
 */
angular.module('catApp')
  .controller('AboutCtrl', ['$scope',function ($scope) {
    $scope.author = 'Brian'
  }]);
