'use strict';

angular.module('finalEnfasisApp')
  .service('creador', function ($http, $stateParams) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var self = this;

    self.obtenerNose = function(callback){
      $http.get('http://greatsource.co/futuro/API/getAll?cedula=1035430999')
        .success(function(data){
          callback(data);
        });
    };
  });
