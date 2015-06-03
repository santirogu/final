'use strict';

angular.module('finalEnfasisApp')
  .service('main', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var self = this;

    self.obtenerPaises = function(callback){
      $http.get('https://restcountries.eu/rest/v1/all')
        .success(function(data){
          callback(data);
        });
    };
  });
