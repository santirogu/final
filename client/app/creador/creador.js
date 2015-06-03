'use strict';

angular.module('finalEnfasisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('creador', {
        url: '/creador',
        templateUrl: 'app/creador/creador.html',
        controller: 'CreadorCtrl'
      });
  });
