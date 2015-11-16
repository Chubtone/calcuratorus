
//ORIGINAL-FILE: app/main/app.js
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
        'ui.bootstrap',
        'uiSwitch'
    ])
    .config(function($routeProvider) {
        'use strict';
        $routeProvider
            .when('/', {
                templateUrl: 'main/views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/yeoman', {
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
            .when('/roman', {
                templateUrl: 'keypad/views/roman_keypad.html',
                controller: 'KeyPadCtrl',
                controllerAs: 'keypad'
            })
            .when('/numeric', {
                templateUrl: 'keypad/views/numeric_keypad.html',
                controller: 'KeyPadCtrl',
                controllerAs: 'keypad'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
;
//ORIGINAL-FILE: app/calculator/controllers/numeric/numeric-calculator-ctrl.js
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

            var parseValueRange = function(value) {
                var result = null;

                if (_.isNumber(value)) {
                    if (utils.isInteger(value)) {
                        if (!_.inRange(value, 1, 4999)) {
                            result = 'Value beyond limit of 1 to 4999 (' + value + ')';
                        } else {
                            result = parseInt(value);
                        }
                    } else {
                        result = 'Invalid Entry: ' + value;
                    }
                } else if (_.isNaN(value)) {
                    result = 'Non est numerus';
                }
                return result;
            };

            var executeMathFunction = function() {
                var result = null;
                if ($scope.inputValues.length === 1) {
                    result = parseValueRange($scope.inputValues[0]);
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

                    result = parseValueRange(result);
                    if (!_.isNumber(result)) {
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
                    if (_.isNumber(result) && _.isFinite(result)) {
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
;
//ORIGINAL-FILE: app/calculator/controllers/numeric/numeric-to-roman-ctrl.js
/**
 * @ngdoc function
 * @name calcuratorusApp.controller:NumericToRomanCtrl
 * @description
 * # NumericToRomanCtrl
 * Controller for the number to roman numeral conversion
 */
angular.module('calcuratorusApp')
    .controller('NumericToRomanCtrl', ['$rootScope', '$scope',
        function numericToRomanCtrl($rootScope, $scope) {
            'use strict';
            var activeCalculationValues = [];

            $scope.handleKeypadInput = function(event) {
                if (event.currentTarget && event.currentTarget.innerHTML) {
                    var selectedValue = parseInt(event.currentTarget.innerHTML);
                    activeCalculationValues.push(selectedValue);
                }
            };

        }

    ]);
;
//ORIGINAL-FILE: app/calculator/controllers/roman/roman-calculator-ctrl.js
angular.module('calcuratorusApp')
    .controller('romanCalculatorCtrl', ['$scope', 'roman_numeral_conversion', 'utils', '$log', '_',
        function romanCalculatorCtrl($scope, roman_numeral_conversion, utils, $log, _) {
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
;
//ORIGINAL-FILE: app/calculator/controllers/roman/roman-to-numeric-ctrl.js
/**
 * @ngdoc function
 * @name calcuratorusApp.controller:RomanToNumericCtrl
 * @description
 * # RomanToNumericCtrl
 * Controller for the roman numeral to number conversion
 */
angular.module('calcuratorusApp')
    .controller('RomanToNumericCtrl', ['$rootScope', '$scope',
        function RomanToNumericCtrl($rootScope, $scope) {
            'use strict';
            var activeCalculationValues = [];

            $scope.handleKeypadInput = function(event) {
                if (event.currentTarget && event.currentTarget.innerHTML) {
                    var selectedValue = parseInt(event.currentTarget.innerHTML);
                    activeCalculationValues.push(selectedValue);
                }
            };

        }

    ]);
;
//ORIGINAL-FILE: app/calculator/directives/converted-results-directive.js
/**
 */
angular.module('calcuratorusApp')
    .directive('convertedResultsDirective', [function() {
        "use strict";
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'calculator/views/conversion_results.html',
            require: 'numericCalculator',
            scope: {},
            controller: function($scope) {
                $scope.$on('valueConverted', function(event, args) {
                    $scope.convertedText = args;
                });

                $scope.$on('receivedClearRequest', function() {
                    $scope.convertedText = null;
                });
            }
        };
    }]);
;
//ORIGINAL-FILE: app/calculator/directives/numeric/numeric-calculator-directive.js
/**
 * I am the parent directive for the numeric calculator.
 * I allow child directives to communicate
 * Child directives will be linked using "require: 'numericCalculator'",
 */
angular.module('calcuratorusApp')
    .directive('numericCalculator', ['$log', function($log) {
        "use strict";
        return {
            restrict: "E",
            controller: 'numericCalculatorCtrl',
            link: function() {
                $log.debug('Parent numericCalculator directive linked');
            }
        };
    }]);
;
//ORIGINAL-FILE: app/calculator/directives/numeric/numeric-calculator-display.js
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
;
//ORIGINAL-FILE: app/calculator/directives/roman/roman-calculator-directive.js
/**
 * I am the parent directive for the roman numeral calculator.
 * I allow child directives to communicate
 * Child directives will be linked using "require: 'romanCalculator'",
 */
angular.module('calcuratorusApp')
    .directive('romanCalculator', ['$log', function($log) {
        "use strict";
        return {
            restrict: "E",
            controller: 'romanCalculatorCtrl',
            link: function() {
                $log.debug('Parent romanCalculator directive linked');
            }
        };
    }]);
;
//ORIGINAL-FILE: app/calculator/directives/roman/roman-calculator-display.js
/*
 Currency Input transform Directive, formats numeric value to currency on the fly
 Usage : <input .....currency-input.. </input> --In this case I'll ensure that this field will contain only numeric values and format the value with decimal places
 */
angular.module('calcuratorusApp')
    .directive('romanDisplay', ['$compile', '$log',
        function($compile, $log) {
            "use strict";

            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'calculator/views/roman/roman_display.html',
                require: 'romanCalculator',
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
;
//ORIGINAL-FILE: app/common/services/roman_numeral_conversion_service.js
angular.module('calcuratorusApp').factory('roman_numeral_conversion', [
    function roman_numeral_conversion() {
        "use strict";

        var convert1s = function(value) {
            var retVal = '';
            value = value % 10;
            if (value === 9) {
                retVal = 'IX';
            } else if (value > 4) {
                retVal = 'VIII'.substr(0, value - 4);
            } else if (value === 4) {
                retVal = 'IV';
            } else {
                retVal = 'III'.substr(0, value);
            }
            return retVal;
        };

        var convert10s = function(value) {
            var retVal = '';
            value = Math.floor((value % 100) / 10);
            if (value === 9) {
                retVal = 'XC';
            } else if (value > 4) {
                retVal = 'LXXX'.substr(0, value - 4);
            } else if (value === 4) {
                retVal = 'XL';
            } else {
                retVal = 'XXX'.substr(0, value);
            }
            return retVal;
        };

        var convert100s = function(value) {
            var retVal = '';
            //Get the remainder under 1000
            value = Math.floor((value % 1000) / 100);
            if (value === 9) {
                retVal = 'CM';
            } else if (value > 4) {
                retVal = 'DCCC'.substr(0, value - 4);
            } else if (value === 4) {
                retVal = 'CD';
            } else {
                retVal = 'CCC'.substr(0, value);
            }
            return retVal;
        };

        var convert1000s = function(value) {
            return ('MMMM'.substr(0, (Math.floor(value / 1000))));
        };

        var parseRoman = function(value) {
            return (convert1000s(value) + convert100s(value) + convert10s(value) + convert1s(value));
        };

        var covertNumberToRoman = function(value) {
            var result,
                numberVal = Math.round(parseFloat(value));
            result = parseRoman(numberVal);
            return result;
        };

        var covertRomanToNumber = function(value) {
            var result,
                numberVal = Math.round(parseFloat(value));
            result = parseRoman(numberVal);
            return result;
        };

        return {
            covertNumberToRoman: covertNumberToRoman,
            covertRomanToNumber: covertRomanToNumber
        };
    }

]);
;
//ORIGINAL-FILE: app/common/services/utils.js
angular.module('calcuratorusApp').factory('utils', [
    function utils() {
        "use strict";

        var isInteger = function(n) {
            return n % 1 === 0;
        };

        return {
            isInteger: isInteger
        };
    }

]);
;
//ORIGINAL-FILE: app/keypad/directives/function-keypad-directive.js
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
;
//ORIGINAL-FILE: app/keypad/directives/numeric/numeric-keypad-directive.js
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
;
//ORIGINAL-FILE: app/keypad/directives/roman/roman-function-keypad-directive.js
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
;
//ORIGINAL-FILE: app/keypad/directives/roman/roman-keypad-directive.js
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
;
//ORIGINAL-FILE: app/main/controllers/about.js
/**
 * @ngdoc function
 * @name calcuratorusApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the calcuratorusApp
 */
angular.module('calcuratorusApp')
    .controller('AboutCtrl', function() {
        'use strict';
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
;
//ORIGINAL-FILE: app/main/controllers/main-ctrl.js
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
;
//ORIGINAL-FILE: app/main/services/lodash_service.js
/*global angular, _ */
(function(module, _) {
    'use strict';

    // https://lodash.com/docs
    // I provide an augmented lodash library.
    module('calcuratorusApp').factory("_",
        function() {
            // Return the public API.
            return _;
        }
    );

})(angular.module, _.noConflict());
// Release the global reference to the lodash library. This way, we make sure
// that everyone goes through our service object in order to get to the utility library.
// https://lodash.com/docs#noConflict
