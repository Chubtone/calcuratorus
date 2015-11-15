/**
 * @ngdoc overview
 * @name calcuratorusApp
 * @description
 * # calcuratorusApp
 *
 * Main module of the application.
 */
//angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular
    .module('calcuratorusApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'uiSwitch'
    ])
    .config(function($routeProvider) {
        'use strict';
        $routeProvider
            .when('/', {
                templateUrl: 'main/views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/yeoman', {
                templateUrl: 'main/views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'main/views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/calc', {
                templateUrl: 'keypad/views/keypad.html',
                controller: 'KeyPadCtrl',
                controllerAs: 'keypad'
            })
            .when('/roman', {
                templateUrl: 'keypad/views/roman_keypad.html',
                controller: 'KeyPadCtrl',
                controllerAs: 'keypad'
            })
            .when('/numeric', {
                templateUrl: 'keypad/views/numeric_keypad.html',
                controller: 'KeyPadCtrl',
                controllerAs: 'keypad'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
