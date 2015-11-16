/*
 * I am the directive for displaying the roman keypad and sending clicks
 */
angular.module('calcuratorusApp')
    .directive('romanKeypadDirective', [
        function() {
            'use strict';

            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'keypad/views/roman_keypad.html',
                require: 'romanCalculator',
                link: function(scope, element, attrs, romanCalculatorCtrl) {
                    scope.romanCalculatorCtrl = romanCalculatorCtrl;
                },
                scope: {},
                controller: function($scope) {
                    $scope.handleKeypadInput = function(value) {
                        if (value && value.currentTarget && value.currentTarget.value) {
                            $scope.romanCalculatorCtrl.handleNumberClicked(value.currentTarget.value);
                        }
                    };
                    $scope.handleKeypadClear = function() {
                        $scope.romanCalculatorCtrl.handleClear();
                    };
                }
            };
        }
    ]);
