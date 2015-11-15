/*
 Currency Input transform Directive, formats numeric value to currency on the fly
 Usage : <input .....currency-input.. </input> --In this case I'll ensure that this field will contain only numeric values and format the value with decimal places
 */
angular.module('calcuratorusApp')
    .directive('numericDisplay', ['$compile', '$log', '$timeout', '_',
        function($compile, $log, $timeout, _) {
            "use strict";

            var inputVal, inputRaw, key, res = '0';

            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'calculator/views/numeric/numeric_display.html',
                require: 'numericCalculator',
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
                        //caretPos = e.target.selectionStart;
                        inputVal = inputRaw = element.find('input').val();
                        key = e.keyCode || e.charCode || e.which;

                        if (parseFloat(inputVal) > 0) {
                            inputVal = inputVal.replace(/[^0-9]+/g, '');
                            //putDecimal(inputVal.length > maxLength ? inputVal.substring(0, maxLength) : inputVal);
                            // caretPos += res.length > inputRaw.length ? 1 : (((key === 8 || key === 46) && res.length === inputRaw.length) ? 1 : 0);
                        } else {
                            //caretPos += (key === 8 || key === 46) ? 1 : 0;
                        }

                        scope.$apply(function() {
                            scope.field = res;
                        });
                        $timeout(function() {
                            if (_.isString(e.srcElement)) {
                                e.srcElement.focus();
                                //  e.srcElement.setSelectionRange(caretPos, caretPos);
                            }
                        }, 0);
                    });

                    element.on('keydown click', function(e) {
                        doDefault(element, e);
                    });
                }
            };

            //function putDecimal(num) {
            //num = String("0000000" + num).slice(-maxLength);
            //res = (num.substr(0, maxLength - 2) + '.' + num.slice(maxLength - 2, maxLength)).replace(/^0+/g, '');
            //res = (res.charAt(0) === '.') ? '0' + res : res;
            // }

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
                /*
                 var a = document.getElementById("numericInput"), b;
                 var c = parseFloat(a.innerText || a.textContent), d = c.toString();
                 if (12 >= d.replace(/^-/, "").replace(/\./, "").length){b = d; }
                 else if (d = c.toPrecision(12), -1 != d.indexOf("e")) {
                 var e = d.match(/e.*$/)[0].length;
                 b = c.toPrecision(12 - e - ("0" == d[0] ? 1 : 0)).replace(/\.?0*e/, "e")
                 } else {
                 var f = d.match(/(^-|\.)/g), g = d.substr(0, 12 + (f ? f.length : 0));
                 b = -1 != g.indexOf(".") ? g.replace(/\.?0*$/, "") : g
                 }
                 a.innerHTML = b;
                 */
            }
        }
    ]);
