/**
 * @ngdoc function
 * @name calcuratorusApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calcuratorusApp
 */
angular.module('calcuratorusApp')
    .controller('MainCtrl', ['$rootScope', '$scope',
        function mainCtrl($rootScope, $scope) {
            'use strict';

            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

            $scope.displayValue = '123';
        }

    ]);
