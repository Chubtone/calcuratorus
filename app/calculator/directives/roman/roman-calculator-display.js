angular.module('calcuratorusApp')
    .directive('romanDisplay', ['$compile', '$log', '$timeout', '_',
        function romanDisplay($compile, $log, $timeout, _) {
            "use strict";

            var inputVal, inputRaw, key, res = '0';

            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'calculator/views/roman/roman_display.html',
                require: 'romanCalculator',
                scope: {
                    //field: '='
                },
                link: function(scope, element, attrs, numericCalculatorCtrl) {

                    scope.numericCalculatorCtrl = numericCalculatorCtrl;

                    scope.$on('receivedKeypadValue', function(event, args) {
                        $log.debug('receiveKeypadValue ' + args);
                        scope.field = args;
                    });

                    scope.$on('receivedClearRequest', function() {
                        $log.debug('receivedClearRequest');
                        scope.field = null;
                    });

                    scope.$on('receivedMathFunctionRequest', function(event, args) {
                        $log.debug('receivedMathFunctionRequest');
                        scope.operation = args;
                    });

                    element.on('keyup', function(e) {
                        res = '0';
                        inputVal = inputRaw = element.find('input').val();
                        key = e.keyCode || e.charCode || e.which;

                        if (parseFloat(inputVal) > 0) {
                            inputVal = inputVal.replace(/[^0-9]+/g, '');
                        } else {
                            //caretPos += (key === 8 || key === 46) ? 1 : 0;
                        }

                        scope.$apply(function() {
                            scope.field = res;
                        });
                        $timeout(function() {
                            if (_.isString(e.srcElement)) {
                                e.srcElement.focus();
                                // e.srcElement.setSelectionRange(caretPos, caretPos);
                            }
                        }, 0);
                    });

                    element.on('keydown click', function(e) {
                        doDefault(element, e);
                    });
                }
            };

            function doDefault(element, e) {

                if (e.keyCode || e.charCode || e.which > 46) {
                    return;
                } else {
                    inputVal = element.find('input').val();

                    $log.debug('inputVal ' + inputVal);
                    $log.debug(parseFloat(inputVal));

                    if (parseFloat(inputVal) > 0) {} else {
                        e.toElement.setSelectionRange(inputVal.length, inputVal.length);
                        e.preventDefault(true);
                    }
                    if (e.target.selectionStart < 1) {
                        e.toElement.setSelectionRange(inputVal.length, inputVal.length);
                    }
                }
            }
        }
    ]);
