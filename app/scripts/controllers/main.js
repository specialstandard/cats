'use strict';

/**
 * @ngdoc function
 * @name catApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the catApp
 */
angular.module('catApp')
  .controller('MainCtrl', ['$scope', '$http', 'apiService', function ($scope, $http, apiService) {

    $scope.cats = {
      female: [],
      male: []
    }
    $scope.error = false;

    // Get the pets

    apiService.getPets()
      .then( function(response){
        $scope.petsArray = response.data

        var owner;
        var pet;

        // Push them into male and female arrays, respectively

        for(var i = 0; i< $scope.petsArray.length; i++){
          owner = $scope.petsArray[i];
          if( owner.gender === 'Male' ){
            if(owner.pets){  
              for(var j = 0; j< owner.pets.length; j++){
                pet = owner.pets[j];
                if( pet.type === 'Cat' ){
                  $scope.cats.male.push( pet );
                }
              }
            }
          } else if( owner.gender === 'Female' ){
              if( owner.pets){
                for(var j = 0; j< owner.pets.length; j++){
                  pet = owner.pets[j];
                  if( pet.type === 'Cat' ){
                    $scope.cats.female.push( pet );
                  }
                }
              }
          } 
        }

        // Sort them by name alphabetically

        $scope.cats.female.sort( function(a,b){
          return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        });
        $scope.cats.male.sort(function(a,b){
          return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        });
      })

      // Catch and display any error

      .catch(function(e){
        $scope.error = true;
        console.log("Error getting pets")
        console.log("Error: ", e.status)
        console.log("Error Message: ", e.statusText)
      });
  }]);
