'use strict';

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
		'ui.bootstrap' ,
		'uiSwitch'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
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
			.otherwise({
				redirectTo: '/'
			});
	});