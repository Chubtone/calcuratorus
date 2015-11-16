/*   
 * I am the directive for displaying the numeric keypad and sending clicks
 */
angular.module('calcuratorusApp')
    .directive('numericKeypadDirective', [
        function() {
            'use strict';

            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'keypad/views/numeric_keypad.html',
                require: 'numericCalculator',
                link: function(scope, element, attrs, numericCalculatorCtrl) {
                    scope.numericCalculatorCtrl = numericCalculatorCtrl;
                },
                scope: {},
                controller: function($scope) {
                    $scope.handleKeypadInput = function(value) {
                        if (value && value.currentTarget && value.currentTarget.value) {
                            $scope.numericCalculatorCtrl.handleNumberClicked(value.currentTarget.value);
                        }
                    };
                    $scope.handleKeypadClear = function() {
                        $scope.numericCalculatorCtrl.handleClear();
                    };
                }
            };
        }
    ]);
