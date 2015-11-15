angular.module('calcuratorusApp')
    .controller('numericCalculatorCtrl', ['$scope', 'roman_numeral_conversion', 'utils', '$log', '_',
        function numericCalculatorCtrl($scope, roman_numeral_conversion, utils, $log, _) {
            'use strict';

            $scope.inputValues = [];
            $scope.mathOperation = null;
            $scope.currentMapPos = 0;
            $scope.displayValue = '0';

            var clear = function() {
                $scope.inputValues = [];
                $scope.currentMapPos = 0;
                $scope.displayValue = '0';
                $scope.mathOperation = null;
                $scope.$broadcast('receivedMathFunctionRequest', null);
            };

            var executeMathFunction = function() {
                var result = null;
                if ($scope.inputValues.length === 1) {
                    result = ($scope.inputValues[0]);
                } else if ($scope.mathOperation && $scope.inputValues.length === 2) {

                    switch ($scope.mathOperation) {
                        case '+':
                            result = ($scope.inputValues[0] + $scope.inputValues[1]);
                            break;
                        case '-':
                            result = ($scope.inputValues[0] - $scope.inputValues[1]);
                            break;
                        case '*':
                            result = ($scope.inputValues[0] * $scope.inputValues[1]);
                            break;
                        case '/':
                            result = ($scope.inputValues[0] / $scope.inputValues[1]);
                            break;
                        default:
                            result = 'Non est numerus';
                            break;
                    }

                    if (_.isNumber(result)) {
                        if (utils.isInteger(result)) {
                            if (!_.inRange(result, 0, 4999)) {
                                result = 'Value beyond limit of 1 to 4999 (' + result + ')';
                                $scope.inputValues = [];
                            } else {
                                result = parseInt(result);
                            }
                        } else {
                            result = 'Invalid Entry: ' + result;
                            $scope.inputValues = [];
                        }
                    } else if (_.isNaN(result)) {
                        result = 'Non est numerus';
                        $scope.inputValues = [];
                    }

                }
                return result;
            };

            this.handleNumberClicked = function(value) {
                $log.debug(value);

                if ($scope.displayValue === '0') {
                    $scope.displayValue = value;
                } else {
                    $scope.displayValue += value;
                }

                $scope.inputValues[$scope.currentMapPos] = parseInt($scope.displayValue);
                $scope.$broadcast('receivedKeypadValue', $scope.inputValues[$scope.currentMapPos]);
            };

            this.handleFunctionClicked = function(value) {
                if ($scope.inputValues.length === 1) {
                    $log.debug(value);
                    $scope.displayValue = '0';
                    $scope.mathOperation = value;
                    $scope.currentMapPos++;
                    $scope.$broadcast('receivedMathFunctionRequest', value);
                }
            };

            this.handleClear = function() {
                $log.debug('handleClearClicked');
                clear();
                $scope.$broadcast('receivedClearRequest');
            };

            this.handleEquals = function() {
                var result = executeMathFunction();

                if (result) {
                    if (_.isNumber(result)) {
                        var convertedValue = roman_numeral_conversion.covertNumberToRoman(result);
                        $scope.$broadcast('valueConverted', convertedValue);
                        $scope.$broadcast('receivedKeypadValue', result);
                    } else {
                        $scope.$broadcast('valueConverted', result);
                        $scope.$broadcast('receivedKeypadValue', null);
                    }
                    clear();
                }

            };

        }

    ]);
