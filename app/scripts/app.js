'use strict';

/**
 * @ngdoc overview
 * @name angularSpringbootUiApp
 * @description
 * # angularSpringbootUiApp
 *
 * Main module of the application.
 */
angular
  .module('angularSpringbootUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    $httpProvider.interceptors.push(function($q, $location) {
      return {
        'responseError': function(rejection) {
          if (rejection && rejection.status === 401) {
            $location.path("/login");
          }
          return $q.reject(rejection);
        },
        'response': function(response) {
          if (response && response.status === 401) {
            console.log("HERE WE ARE ");
            console.log(response);
          }
          return response;
        }
      };
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/demo', {
        templateUrl: 'views/demo.html',
        controller: 'DemoCtrl',
        controllerAs: 'demo'
      })
      .when('/demo', {
        templateUrl: 'views/demo.html',
        controller: 'DemoCtrl',
        controllerAs: 'demo'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/secure-demo', {
        templateUrl: 'views/secure-demo.html',
        controller: 'SecureDemoCtrl',
        controllerAs: 'secureDemo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
