angular.module('calcuratorusApp')
    .directive('functionKeypadDirective', [
        function() {
            'use strict';

            return {
                restrict: 'EA',
                replace: true,
                templateUrl: 'keypad/views/function_keypad.html',
                require: 'numericCalculator',
                link: function(scope, element, attrs, numericCalculatorCtrl) {
                    scope.numericCalculatorCtrl = numericCalculatorCtrl;
                },
                scope: {},
                controller: function($scope) {
                    $scope.handleFunction = function(event) {
                        if (event && event.currentTarget && event.currentTarget.value) {
                            $scope.numericCalculatorCtrl.handleFunctionClicked(event.currentTarget.value);
                        }
                    };
                    $scope.handleEquals = function() {
                        $scope.numericCalculatorCtrl.handleEquals();
                    };
                }
            };
        }
    ]);
