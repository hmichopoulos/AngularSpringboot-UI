'use strict';

/**
 * @ngdoc function
 * @name angularSpringbootUiApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the angularSpringbootUiApp
 */
angular.module('angularSpringbootUiApp')
  .controller('NavigationCtrl', function ($http, $rootScope, $location, $window) {

    $rootScope.logout = function () {
      $http.post("/api/logout", {}).then(
        function success(response) {
          $rootScope.authenticated = false;
          $location.path("/");
        },
        function error(response) {
          $rootScope.authenticated = false;
          $location.path("/");
        }
      )
    };

    $http.get("/api/currentUser").then(
      function success(response) {
        $rootScope.authenticated = true;
        $rootScope.username = response.data.username;
      },
      function error() {
        console.log("NOT OK");
        $rootScope.authenticated = false;
        $rootScope.username = '';
      }
    );

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
