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
  .config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  });
