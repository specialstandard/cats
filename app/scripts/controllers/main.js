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

    apiService.getPets()
      .then( function(response){
        $scope.petsArray = response.data
        console.log( 'pets: ', $scope.petsArray )

        var owner;
        var pet;

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
      })
      .catch(function(e){
        $scope.error = true;
        console.log("Error getting pets")
        console.log("Error: ", e.status)
        console.log("Error Message: ", e.statusText)
      });
  }]);
