'use strict';

/**
 * @ngdoc function
 * @name angularSpringbootUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularSpringbootUiApp
 */
angular.module('angularSpringbootUiApp')
  .controller('LoginCtrl', function ($http, $rootScope, $location, $window) {

    var ctrl = this;

    ctrl.doLogin = function () {
      console.log(ctrl.username);
      var headers = ctrl.username ? {authorization : "Basic "
        + btoa(ctrl.username + ":" + ctrl.password)
        } : {};
      $http({
        url: "/api/currentUser",
        method: "GET",
        headers: headers
      }).then(
        function(response) {
          ctrl.error = false;
          if (response.data.authenticated) {
            $rootScope.authenticated = true;
            $location.path("/");
          }
        },
        function(response) {
          ctrl.error = true;
          $rootScope.authenticated = false;
        }
      )
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
