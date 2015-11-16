angular.module('calcuratorusApp')
    .directive('romanFunctionKeypadDirective', [
        function() {
            'use strict';

            return {
                restrict: 'EA',
                replace: true,
                templateUrl: 'keypad/views/function_keypad.html',
                require: 'romanCalculator',
                link: function(scope, element, attrs, romanCalculatorCtrl) {
                    scope.numericCalculatorCtrl = romanCalculatorCtrl;
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
