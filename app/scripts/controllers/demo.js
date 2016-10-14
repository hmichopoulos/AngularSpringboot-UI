'use strict';

/**
 * @ngdoc function
 * @name angularSpringbootUiApp.controller:DemoCtrl
 * @description
 * # DemoCtrl
 * Controller of the angularSpringbootUiApp
 */
angular.module('angularSpringbootUiApp')
  .controller('DemoCtrl', function ($http, $scope) {

    $http.get('/api/hi')
      .success(function(data) {
        $scope.greeting = data.greeting;
      })
      .error(function(data) {
        $scope.error = data;
      });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
