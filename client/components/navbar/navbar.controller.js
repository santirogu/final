'use strict';

angular.module('finalEnfasisApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Paises',
      'link': '/'
    },
      {
        'title':'Creador',
        'link':'/creador'
      }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
