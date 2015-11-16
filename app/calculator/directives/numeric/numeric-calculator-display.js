/*
 Currency Input transform Directive, formats numeric value to currency on the fly
 Usage : <input .....currency-input.. </input> --In this case I'll ensure that this field will contain only numeric values and format the value with decimal places
 */
angular.module('calcuratorusApp')
    .directive('numericDisplay', ['$compile', '$log',
        function($compile, $log) {
            "use strict";

            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'calculator/views/numeric/numeric_display.html',
                require: 'numericCalculator',
                scope: {},
                controller: function($scope) {

                    $scope.$on('receivedKeypadValue', function(event, args) {
                        $log.debug('receiveKeypadValue ' + args);
                        $scope.field = args;
                    });

                    $scope.$on('receivedClearRequest', function() {
                        $log.debug('receivedClearRequest');
                        $scope.field = null;
                    });

                    $scope.$on('receivedMathFunctionRequest', function(event, args) {
                        $log.debug('receivedMathFunctionRequest');
                        $scope.operation = args;
                    });

                },
                link: function(scope, element, attrs, numericCalculatorCtrl) {

                    scope.numericCalculatorCtrl = numericCalculatorCtrl;

                    element.on('keyup', function() {
                        var inputVal,
                            inputEle = element.find('input');
                        inputVal = inputEle.val();
                        inputVal = inputVal.replace(/[^0-9]+/g, '');
                        if (parseInt(inputVal) > 0) {
                            var intValue = parseInt(inputVal);
                            scope.field = "" + intValue;
                            inputEle.val(scope.field);
                            numericCalculatorCtrl.handleNumberClicked(intValue);
                        } else {
                            inputEle.val('');
                        }
                    });

                }
            };

        }
    ]);
