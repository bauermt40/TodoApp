'use strict';

/**
 * @ngdoc function
 * @name todoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoAppApp
 */
angular.module('todoAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Item 1', 'Item 2', 'Item 3'
    ];
  });
