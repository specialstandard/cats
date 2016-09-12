'use strict';

/**
 * @ngdoc overview
 * @name catApp
 * @description
 * # catApp
 *
 * Main module of the application.
 */
angular
  .module('catApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
