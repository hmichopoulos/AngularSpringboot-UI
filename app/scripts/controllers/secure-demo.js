'use strict';

/**
 * @ngdoc function
 * @name angularSpringbootUiApp.controller:SecureDemoCtrl
 * @description
 * # SecureDemoCtrl
 * Controller of the angularSpringbootUiApp
 */
angular.module('angularSpringbootUiApp')
  .controller('SecureDemoCtrl', function ($http, $scope) {

    $http.get('/api/secure/hi')
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
