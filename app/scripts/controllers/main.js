'use strict';

/**
 * @ngdoc function
 * @name catApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the catApp
 */
angular.module('catApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.cats = {
      female: [],
      male: []
    }

    $http.get('models/pets.json')
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
  });
