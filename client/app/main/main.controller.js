'use strict';

angular.module('finalEnfasisApp')
  .controller('MainCtrl', function ($scope, $http, main, Modal) {

  var init = function(){
    main.obtenerPaises(callbackPaises);
  };

    var callbackPaises = function(data){
      $scope.paises = data;
    };

    $scope.mostrar = function(){
      Modal.confirm.show();
    };

    init();
  });
