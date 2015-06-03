'use strict';

angular.module('finalEnfasisApp')
  .controller('CreadorCtrl', function ($scope, creador) {

    var init = function(){
      creador.obtenerNose(callbackyo);
    };

    var callbackyo = function(data){
      $scope.misDatos = data;
    };

    init();
  });
