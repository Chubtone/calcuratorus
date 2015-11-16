//ORIGINAL-FILE: app/build/applib-debug.js

//ORIGINAL-FILE: app/build/templates.js
angular.module('calcuratorusApp').run(['$templateCache', function($templateCache) {
    'use strict';

    $templateCache.put('404.html',
        "<!doctype html><html lang=en><head><meta charset=utf-8><title>Page Not Found :(</title><style>::-moz-selection {\n" +
        "        background: #b3d4fc;\n" +
        "        text-shadow: none;\n" +
        "      }\n" +
        "\n" +
        "      ::selection {\n" +
        "        background: #b3d4fc;\n" +
        "        text-shadow: none;\n" +
        "      }\n" +
        "\n" +
        "      html {\n" +
        "        padding: 30px 10px;\n" +
        "        font-size: 20px;\n" +
        "        line-height: 1.4;\n" +
        "        color: #737373;\n" +
        "        background: #f0f0f0;\n" +
        "        -webkit-text-size-adjust: 100%;\n" +
        "        -ms-text-size-adjust: 100%;\n" +
        "      }\n" +
        "\n" +
        "      html,\n" +
        "      input {\n" +
        "        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n" +
        "      }\n" +
        "\n" +
        "      body {\n" +
        "        max-width: 500px;\n" +
        "        padding: 30px 20px 50px;\n" +
        "        border: 1px solid #b3b3b3;\n" +
        "        border-radius: 4px;\n" +
        "        margin: 0 auto;\n" +
        "        box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n" +
        "        background: #fcfcfc;\n" +
        "      }\n" +
        "\n" +
        "      h1 {\n" +
        "        margin: 0 10px;\n" +
        "        font-size: 50px;\n" +
        "        text-align: center;\n" +
        "      }\n" +
        "\n" +
        "      h1 span {\n" +
        "        color: #bbb;\n" +
        "      }\n" +
        "\n" +
        "      h3 {\n" +
        "        margin: 1.5em 0 0.5em;\n" +
        "      }\n" +
        "\n" +
        "      p {\n" +
        "        margin: 1em 0;\n" +
        "      }\n" +
        "\n" +
        "      ul {\n" +
        "        padding: 0 0 0 40px;\n" +
        "        margin: 1em 0;\n" +
        "      }\n" +
        "\n" +
        "      .container {\n" +
        "        max-width: 380px;\n" +
        "        margin: 0 auto;\n" +
        "      }\n" +
        "\n" +
        "      /* google search */\n" +
        "\n" +
        "      #goog-fixurl ul {\n" +
        "        list-style: none;\n" +
        "        padding: 0;\n" +
        "        margin: 0;\n" +
        "      }\n" +
        "\n" +
        "      #goog-fixurl form {\n" +
        "        margin: 0;\n" +
        "      }\n" +
        "\n" +
        "      #goog-wm-qt,\n" +
        "      #goog-wm-sb {\n" +
        "        border: 1px solid #bbb;\n" +
        "        font-size: 16px;\n" +
        "        line-height: normal;\n" +
        "        vertical-align: top;\n" +
        "        color: #444;\n" +
        "        border-radius: 2px;\n" +
        "      }\n" +
        "\n" +
        "      #goog-wm-qt {\n" +
        "        width: 220px;\n" +
        "        height: 20px;\n" +
        "        padding: 5px;\n" +
        "        margin: 5px 10px 0 0;\n" +
        "        box-shadow: inset 0 1px 1px #ccc;\n" +
        "      }\n" +
        "\n" +
        "      #goog-wm-sb {\n" +
        "        display: inline-block;\n" +
        "        height: 32px;\n" +
        "        padding: 0 10px;\n" +
        "        margin: 5px 0 0;\n" +
        "        white-space: nowrap;\n" +
        "        cursor: pointer;\n" +
        "        background-color: #f5f5f5;\n" +
        "        background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
        "        background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
        "        background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
        "        background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
        "        -webkit-appearance: none;\n" +
        "        -moz-appearance: none;\n" +
        "        appearance: none;\n" +
        "      }\n" +
        "\n" +
        "      #goog-wm-sb:hover,\n" +
        "      #goog-wm-sb:focus {\n" +
        "        border-color: #aaa;\n" +
        "        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n" +
        "        background-color: #f8f8f8;\n" +
        "      }\n" +
        "\n" +
        "      #goog-wm-qt:hover,\n" +
        "      #goog-wm-qt:focus {\n" +
        "        border-color: #105cb6;\n" +
        "        outline: 0;\n" +
        "        color: #222;\n" +
        "      }\n" +
        "\n" +
        "      input::-moz-focus-inner {\n" +
        "        padding: 0;\n" +
        "        border: 0;\n" +
        "      }</style></head><body><div class=container><h1>Not found <span>:(</span></h1><p>Sorry, but the page you were trying to view does not exist.</p><p>It looks like this was the result of either:</p><ul><li>a mistyped address</li><li>an out-of-date link</li></ul><script>var GOOG_FIXURL_LANG = (navigator.language || '').slice(0,2),GOOG_FIXURL_SITE = location.host;</script><script src=//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js></script></div></body></html>"
    );

    $templateCache.put('calculator/views/conversion_results.html',
        "<div><div>Converted Value</div><div class=container><div class=\"row keypad-row\"><div ng-bind=convertedText class=\"displayContainer converted-results\"></div></div></div></div>"
    );

    $templateCache.put('calculator/views/numeric/numeric_calculator.html',
        "<div class=jumbotron ng-controller=NumericToRomanCtrl><div><converted-results-directive class=pad></converted-results-directive></div><div class=displayContainer><numeric-calculator numeric-display class=typeNumber placeholder=\"0\"></div><div class=\"container keypadContainer\"><div class=row><numeric-calculator numeric-keypad-directive=\"\" class=col-sm-10></numeric-calculator><numeric-calculator function-keypad-directive class=col-sm-2></numeric-calculator></div></div></div>"
    );

    $templateCache.put('calculator/views/numeric/numeric_display.html',
        "<span><input id=numericInput class=displayInput ng-model=field placeholder=0><div ng-bind=operation></div></span>"
    );

    $templateCache.put('calculator/views/roman/roman_calculator.html',
        "<div class=jumbotron ng-controller=RomanToNumericCtrl><div><converted-results-directive class=pad></converted-results-directive></div><div class=displayContainer><div class=pad><roman-calculator roman-display class=typeNumber placeholder=\"0\"></div></div><div class=\"container keypadContainer\"><div class=row><roman-calculator roman-keypad-directive class=col-sm-10></roman-calculator><roman-calculator roman-function-keypad-directive class=col-sm-2></roman-calculator></div></div></div>"
    );

    $templateCache.put('calculator/views/roman/roman_display.html',
        "<span class=\"midfg xlarge\"><input id=numericInput class=displayInput ng-model=field placeholder=0><div ng-bind=operation></div></span>"
    );

    $templateCache.put('index.html',
        "<!doctype html><html lang=en><head><meta charset=utf-8><title></title><meta name=description content=\"\"><meta name=viewport content=\"width=device-width\"><link rel=stylesheet href=\"../bower_components/angular-ui-switch/angular-ui-switch.css\"><link rel=stylesheet href=styles/main.css><link rel=stylesheet href=\"../bower_components/bootstrap/dist/css/bootstrap.min.css\"></head><body ng-app=calcuratorusApp><!--[if lte IE 8]><p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade\n" +
        "  your browser</a> to improve your experience.</p><![endif]--><div class=header><div class=\"navbar navbar-default\" role=navigation><div class=container><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#js-navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=\"#/\">Calcuratorus</a></div><div class=\"collapse navbar-collapse\" id=js-navbar-collapse><ul class=\"nav navbar-nav\"><li class=active><a href=\"#/\">Home</a></li><li><a ng-href=#/about>About</a></li><li><a ng-href=\"#/\">Contact</a></li></ul></div></div></div></div><div class=container><div ng-view=\"\"></div></div><div class=footer><div class=container><p><span class=\"glyphicon glyphicon-heart\"></span> from the Yeoman team</p></div></div><script>!function (A, n, g, u, l, a, r) {\n" +
        "    A.GoogleAnalyticsObject = l, A[l] = A[l] || function () {\n" +
        "              (A[l].q = A[l].q || []).push(arguments)\n" +
        "            }, A[l].l = +new Date, a = n.createElement(g),\n" +
        "            r = n.getElementsByTagName(g)[0], a.src = u, r.parentNode.insertBefore(a, r)\n" +
        "  }(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');\n" +
        "\n" +
        "  ga('create', 'UA-XXXXX-X');\n" +
        "  ga('send', 'pageview');</script><script src=../bower_components/jquery/dist/jquery.js></script><script src=../bower_components/angular/angular.js></script><script src=../bower_components/angular-animate/angular-animate.js></script><script src=../bower_components/angular-cookies/angular-cookies.js></script><script src=../bower_components/angular-resource/angular-resource.js></script><script src=../bower_components/angular-route/angular-route.js></script><script src=../bower_components/angular-sanitize/angular-sanitize.js></script><script src=../bower_components/angular-touch/angular-touch.js></script><script src=../bower_components/angular-bootstrap/ui-bootstrap-tpls.js></script><script src=../bower_components/lodash/lodash.js></script><script src=../bower_components/angular-ui-switch/angular-ui-switch.js></script><script src=../bower_components/bootstrap/dist/js/bootstrap.js></script><script src=../bower_components/angular-ui-router/release/angular-ui-router.js></script><script src=main/app.js></script><script src=main/services/lodash_service.js></script><script src=main/controllers/main-ctrl.js></script><script src=main/controllers/about.js></script><script src=build/templates.js></script><script src=calculator/controllers/numeric/numeric-calculator-ctrl.js></script><script src=calculator/directives/converted-results-directive.js></script><script src=calculator/directives/numeric/numeric-calculator-directive.js></script><script src=calculator/directives/numeric/numeric-calculator-display.js></script><script src=calculator/controllers/numeric/numeric-to-roman-ctrl.js></script><script src=calculator/controllers/roman/roman-calculator-ctrl.js></script><script src=calculator/controllers/roman/roman-to-numeric-ctrl.js></script><script src=calculator/directives/roman/roman-calculator-directive.js></script><script src=calculator/directives/roman/roman-calculator-display.js></script><script src=common/services/utils.js></script><script src=common/services/roman_numeral_conversion_service.js></script><script src=keypad/directives/function-keypad-directive.js></script><script src=keypad/directives/numeric/numeric-keypad-directive.js></script><script src=keypad/directives/roman/roman-keypad-directive.js></script><script src=keypad/directives/roman/roman-function-keypad-directive.js></script></body></html>"
    );

    $templateCache.put('keypad/views/function_keypad.html',
        "<div class=keypad><div class=row><div class=col-sm-2><button type=button class=\"btn btn-primary btn-keypad\" value=\"/\" ng-click=handleFunction($event)>&divide;</button></div></div><div class=\"row keypad-row\"><div class=col-sm-2><button type=button class=\"btn btn-primary btn-keypad\" value=* ng-click=handleFunction($event)>&times;</button></div></div><div class=\"row keypad-row\"><div class=col-sm-2><button type=button class=\"btn btn-primary btn-keypad\" value=- ng-click=handleFunction($event)>&minus;</button></div></div><div class=\"row keypad-row\"><div class=col-sm-2><button type=button class=\"btn btn-primary btn-keypad\" value=+ ng-click=handleFunction($event)>&plus;</button></div></div><div class=\"row keypad-row\"><div class=col-sm-6><button type=button class=\"btn btn-primary btn-keypad\" value=\"=\" ng-click=handleEquals()>&equals;</button></div></div></div>"
    );

    $templateCache.put('keypad/views/numeric_keypad.html',
        "<div class=\"container keypad-container\"><div class=row><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=1 ng-click=handleKeypadInput($event)>1</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=2 ng-click=handleKeypadInput($event)>2</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=3 ng-click=handleKeypadInput($event)>3</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=4 ng-click=handleKeypadInput($event)>4</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=5 ng-click=handleKeypadInput($event)>5</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=6 ng-click=handleKeypadInput($event)>6</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=7 ng-click=handleKeypadInput($event)>7</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=8 ng-click=handleKeypadInput($event)>8</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=9 ng-click=handleKeypadInput($event)>9</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=clear ng-click=handleKeypadClear()>Clear</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=0 ng-click=handleKeypadInput($event)>0</button></div></div></div>"
    );

    $templateCache.put('keypad/views/roman_keypad.html',
        "<div class=container style=\"width: 400px\"><div class=row><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=1 ng-click=handleKeypadInput($event)>I</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=2 ng-click=handleKeypadInput($event)>II</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=3 ng-click=handleKeypadInput($event)>III</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=5 ng-click=handleKeypadInput($event)>V</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=10 ng-click=handleKeypadInput($event)>X</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=50 ng-click=handleKeypadInput($event)>L</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=100 ng-click=handleKeypadInput($event)>C</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=500 ng-click=handleKeypadInput($event)>D</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=1000 ng-click=handleKeypadInput($event)>M</button></div></div><div class=\"row keypad-row\"><div class=col-sm-12><button type=button class=\"btn btn-primary btnRoman\" value=clear ng-click=handleKeypadClear()>Clear</button></div></div></div>"
    );

    $templateCache.put('main/views/about.html',
        "<p>This is the about view.</p>"
    );

    $templateCache.put('main/views/main.html',
        "<form><switch id=enabled name=enabled ng-model=enabled class=green></switch><br>Enabled: {{ enabled }}</form><uib-tabset><hr><uib-tab heading=\"Number To Roman Calculator\"><div ng-include=\"'calculator/views/numeric/numeric_calculator.html'\"></div></uib-tab><uib-tab heading=\"Roman To Number Calculator\"><div ng-include=\"'calculator/views/roman/roman_calculator.html'\"></div></uib-tab></uib-tabset><hr>"
    );

    $templateCache.put('main/views/yeoman.html',
        "<div class=jumbotron><h1>'Allo, 'Allo!</h1><p class=lead><img src=images/yeoman.png alt=\"I'm Yeoman\"><br>Always a pleasure scaffolding your apps.</p><p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p></div><div class=\"row marketing\"><h4>HTML5 Boilerplate</h4><p>HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.</p><h4>Angular</h4><p>AngularJS is a toolset for building the framework most suited to your application development.</p><h4>Karma</h4><p>Spectacular Test Runner for JavaScript.</p></div>"
    );

}]);;
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

    ]);;
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

    ]);;
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

    ]);;
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

    ]);;
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
    }]);;
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
    }]);;
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
    ]);;
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
    }]);;
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
    ]);;
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

]);;
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

]);;
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
    ]);;
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
    ]);;
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
    ]);;
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
    ]);;
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
    });;
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
    });;
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

    ]);;
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
;
//ORIGINAL-FILE: app/build/templates.js
angular.module('calcuratorusApp').run(['$templateCache', function($templateCache) {
    'use strict';

    $templateCache.put('404.html',
        "<!doctype html><html lang=en><head><meta charset=utf-8><title>Page Not Found :(</title><style>::-moz-selection {\n" +
        "        background: #b3d4fc;\n" +
        "        text-shadow: none;\n" +
        "      }\n" +
        "\n" +
        "      ::selection {\n" +
        "        background: #b3d4fc;\n" +
        "        text-shadow: none;\n" +
        "      }\n" +
        "\n" +
        "      html {\n" +
        "        padding: 30px 10px;\n" +
        "        font-size: 20px;\n" +
        "        line-height: 1.4;\n" +
        "        color: #737373;\n" +
        "        background: #f0f0f0;\n" +
        "        -webkit-text-size-adjust: 100%;\n" +
        "        -ms-text-size-adjust: 100%;\n" +
        "      }\n" +
        "\n" +
        "      html,\n" +
        "      input {\n" +
        "        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n" +
        "      }\n" +
        "\n" +
        "      body {\n" +
        "        max-width: 500px;\n" +
        "        padding: 30px 20px 50px;\n" +
        "        border: 1px solid #b3b3b3;\n" +
        "        border-radius: 4px;\n" +
        "        margin: 0 auto;\n" +
        "        box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n" +
        "        background: #fcfcfc;\n" +
        "      }\n" +
        "\n" +
        "      h1 {\n" +
        "        margin: 0 10px;\n" +
        "        font-size: 50px;\n" +
        "        text-align: center;\n" +
        "      }\n" +
        "\n" +
        "      h1 span {\n" +
        "        color: #bbb;\n" +
        "      }\n" +
        "\n" +
        "      h3 {\n" +
        "        margin: 1.5em 0 0.5em;\n" +
        "      }\n" +
        "\n" +
        "      p {\n" +
        "        margin: 1em 0;\n" +
        "      }\n" +
        "\n" +
        "      ul {\n" +
        "        padding: 0 0 0 40px;\n" +
        "        margin: 1em 0;\n" +
        "      }\n" +
        "\n" +
        "      .container {\n" +
        "        max-width: 380px;\n" +
        "        margin: 0 auto;\n" +
        "      }\n" +
        "\n" +
        "      /* google search */\n" +
        "\n" +
        "      #goog-fixurl ul {\n" +
        "        list-style: none;\n" +
        "        padding: 0;\n" +
        "        margin: 0;\n" +
        "      }\n" +
        "\n" +
        "      #goog-fixurl form {\n" +
        "        margin: 0;\n" +
        "      }\n" +
        "\n" +
        "      #goog-wm-qt,\n" +
        "      #goog-wm-sb {\n" +
        "        border: 1px solid #bbb;\n" +
        "        font-size: 16px;\n" +
        "        line-height: normal;\n" +
        "        vertical-align: top;\n" +
        "        color: #444;\n" +
        "        border-radius: 2px;\n" +
        "      }\n" +
        "\n" +
        "      #goog-wm-qt {\n" +
        "        width: 220px;\n" +
        "        height: 20px;\n" +
        "        padding: 5px;\n" +
        "        margin: 5px 10px 0 0;\n" +
        "        box-shadow: inset 0 1px 1px #ccc;\n" +
        "      }\n" +
        "\n" +
        "      #goog-wm-sb {\n" +
        "        display: inline-block;\n" +
        "        height: 32px;\n" +
        "        padding: 0 10px;\n" +
        "        margin: 5px 0 0;\n" +
        "        white-space: nowrap;\n" +
        "        cursor: pointer;\n" +
        "        background-color: #f5f5f5;\n" +
        "        background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
        "        background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
        "        background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
        "        background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
        "        -webkit-appearance: none;\n" +
        "        -moz-appearance: none;\n" +
        "        appearance: none;\n" +
        "      }\n" +
        "\n" +
        "      #goog-wm-sb:hover,\n" +
        "      #goog-wm-sb:focus {\n" +
        "        border-color: #aaa;\n" +
        "        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n" +
        "        background-color: #f8f8f8;\n" +
        "      }\n" +
        "\n" +
        "      #goog-wm-qt:hover,\n" +
        "      #goog-wm-qt:focus {\n" +
        "        border-color: #105cb6;\n" +
        "        outline: 0;\n" +
        "        color: #222;\n" +
        "      }\n" +
        "\n" +
        "      input::-moz-focus-inner {\n" +
        "        padding: 0;\n" +
        "        border: 0;\n" +
        "      }</style></head><body><div class=container><h1>Not found <span>:(</span></h1><p>Sorry, but the page you were trying to view does not exist.</p><p>It looks like this was the result of either:</p><ul><li>a mistyped address</li><li>an out-of-date link</li></ul><script>var GOOG_FIXURL_LANG = (navigator.language || '').slice(0,2),GOOG_FIXURL_SITE = location.host;</script><script src=//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js></script></div></body></html>"
    );

    $templateCache.put('calculator/views/conversion_results.html',
        "<div><div>Converted Value</div><div class=container><div class=\"row keypad-row\"><div ng-bind=convertedText class=\"displayContainer converted-results\"></div></div></div></div>"
    );

    $templateCache.put('calculator/views/numeric/numeric_calculator.html',
        "<div class=jumbotron ng-controller=NumericToRomanCtrl><div><converted-results-directive class=pad></converted-results-directive></div><div class=displayContainer><numeric-calculator numeric-display class=typeNumber placeholder=\"0\"></div><div class=\"container keypadContainer\"><div class=row><numeric-calculator numeric-keypad-directive=\"\" class=col-sm-10></numeric-calculator><numeric-calculator function-keypad-directive class=col-sm-2></numeric-calculator></div></div></div>"
    );

    $templateCache.put('calculator/views/numeric/numeric_display.html',
        "<span><input id=numericInput class=displayInput ng-model=field placeholder=0><div ng-bind=operation></div></span>"
    );

    $templateCache.put('calculator/views/roman/roman_calculator.html',
        "<div class=jumbotron ng-controller=RomanToNumericCtrl><div><converted-results-directive class=pad></converted-results-directive></div><div class=displayContainer><div class=pad><roman-calculator roman-display class=typeNumber placeholder=\"0\"></div></div><div class=\"container keypadContainer\"><div class=row><roman-calculator roman-keypad-directive class=col-sm-10></roman-calculator><roman-calculator roman-function-keypad-directive class=col-sm-2></roman-calculator></div></div></div>"
    );

    $templateCache.put('calculator/views/roman/roman_display.html',
        "<span class=\"midfg xlarge\"><input id=numericInput class=displayInput ng-model=field placeholder=0><div ng-bind=operation></div></span>"
    );

    $templateCache.put('index.html',
        "<!doctype html><html lang=en><head><meta charset=utf-8><title></title><meta name=description content=\"\"><meta name=viewport content=\"width=device-width\"><link rel=stylesheet href=\"../bower_components/angular-ui-switch/angular-ui-switch.css\"><link rel=stylesheet href=styles/main.css><link rel=stylesheet href=\"../bower_components/bootstrap/dist/css/bootstrap.min.css\"></head><body ng-app=calcuratorusApp><!--[if lte IE 8]><p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade\n" +
        "  your browser</a> to improve your experience.</p><![endif]--><div class=header><div class=\"navbar navbar-default\" role=navigation><div class=container><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#js-navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=\"#/\">Calcuratorus</a></div><div class=\"collapse navbar-collapse\" id=js-navbar-collapse><ul class=\"nav navbar-nav\"><li class=active><a href=\"#/\">Home</a></li><li><a ng-href=#/about>About</a></li><li><a ng-href=\"#/\">Contact</a></li></ul></div></div></div></div><div class=container><div ng-view=\"\"></div></div><div class=footer><div class=container><p><span class=\"glyphicon glyphicon-heart\"></span> from the Yeoman team</p></div></div><script>!function (A, n, g, u, l, a, r) {\n" +
        "    A.GoogleAnalyticsObject = l, A[l] = A[l] || function () {\n" +
        "              (A[l].q = A[l].q || []).push(arguments)\n" +
        "            }, A[l].l = +new Date, a = n.createElement(g),\n" +
        "            r = n.getElementsByTagName(g)[0], a.src = u, r.parentNode.insertBefore(a, r)\n" +
        "  }(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');\n" +
        "\n" +
        "  ga('create', 'UA-XXXXX-X');\n" +
        "  ga('send', 'pageview');</script><script src=../bower_components/jquery/dist/jquery.js></script><script src=../bower_components/angular/angular.js></script><script src=../bower_components/angular-animate/angular-animate.js></script><script src=../bower_components/angular-cookies/angular-cookies.js></script><script src=../bower_components/angular-resource/angular-resource.js></script><script src=../bower_components/angular-route/angular-route.js></script><script src=../bower_components/angular-sanitize/angular-sanitize.js></script><script src=../bower_components/angular-touch/angular-touch.js></script><script src=../bower_components/angular-bootstrap/ui-bootstrap-tpls.js></script><script src=../bower_components/lodash/lodash.js></script><script src=../bower_components/angular-ui-switch/angular-ui-switch.js></script><script src=../bower_components/bootstrap/dist/js/bootstrap.js></script><script src=../bower_components/angular-ui-router/release/angular-ui-router.js></script><script src=main/app.js></script><script src=main/services/lodash_service.js></script><script src=main/controllers/main-ctrl.js></script><script src=main/controllers/about.js></script><script src=build/templates.js></script><script src=calculator/controllers/numeric/numeric-calculator-ctrl.js></script><script src=calculator/directives/converted-results-directive.js></script><script src=calculator/directives/numeric/numeric-calculator-directive.js></script><script src=calculator/directives/numeric/numeric-calculator-display.js></script><script src=calculator/controllers/numeric/numeric-to-roman-ctrl.js></script><script src=calculator/controllers/roman/roman-calculator-ctrl.js></script><script src=calculator/controllers/roman/roman-to-numeric-ctrl.js></script><script src=calculator/directives/roman/roman-calculator-directive.js></script><script src=calculator/directives/roman/roman-calculator-display.js></script><script src=common/services/utils.js></script><script src=common/services/roman_numeral_conversion_service.js></script><script src=keypad/directives/function-keypad-directive.js></script><script src=keypad/directives/numeric/numeric-keypad-directive.js></script><script src=keypad/directives/roman/roman-keypad-directive.js></script><script src=keypad/directives/roman/roman-function-keypad-directive.js></script></body></html>"
    );

    $templateCache.put('keypad/views/function_keypad.html',
        "<div class=keypad><div class=row><div class=col-sm-2><button type=button class=\"btn btn-primary btn-keypad\" value=\"/\" ng-click=handleFunction($event)>&divide;</button></div></div><div class=\"row keypad-row\"><div class=col-sm-2><button type=button class=\"btn btn-primary btn-keypad\" value=* ng-click=handleFunction($event)>&times;</button></div></div><div class=\"row keypad-row\"><div class=col-sm-2><button type=button class=\"btn btn-primary btn-keypad\" value=- ng-click=handleFunction($event)>&minus;</button></div></div><div class=\"row keypad-row\"><div class=col-sm-2><button type=button class=\"btn btn-primary btn-keypad\" value=+ ng-click=handleFunction($event)>&plus;</button></div></div><div class=\"row keypad-row\"><div class=col-sm-6><button type=button class=\"btn btn-primary btn-keypad\" value=\"=\" ng-click=handleEquals()>&equals;</button></div></div></div>"
    );

    $templateCache.put('keypad/views/numeric_keypad.html',
        "<div class=\"container keypad-container\"><div class=row><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=1 ng-click=handleKeypadInput($event)>1</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=2 ng-click=handleKeypadInput($event)>2</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=3 ng-click=handleKeypadInput($event)>3</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=4 ng-click=handleKeypadInput($event)>4</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=5 ng-click=handleKeypadInput($event)>5</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=6 ng-click=handleKeypadInput($event)>6</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=7 ng-click=handleKeypadInput($event)>7</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=8 ng-click=handleKeypadInput($event)>8</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=9 ng-click=handleKeypadInput($event)>9</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=clear ng-click=handleKeypadClear()>Clear</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=0 ng-click=handleKeypadInput($event)>0</button></div></div></div>"
    );

    $templateCache.put('keypad/views/roman_keypad.html',
        "<div class=container style=\"width: 400px\"><div class=row><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=1 ng-click=handleKeypadInput($event)>I</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=2 ng-click=handleKeypadInput($event)>II</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=3 ng-click=handleKeypadInput($event)>III</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=5 ng-click=handleKeypadInput($event)>V</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=10 ng-click=handleKeypadInput($event)>X</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=50 ng-click=handleKeypadInput($event)>L</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=100 ng-click=handleKeypadInput($event)>C</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=500 ng-click=handleKeypadInput($event)>D</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=1000 ng-click=handleKeypadInput($event)>M</button></div></div><div class=\"row keypad-row\"><div class=col-sm-12><button type=button class=\"btn btn-primary btnRoman\" value=clear ng-click=handleKeypadClear()>Clear</button></div></div></div>"
    );

    $templateCache.put('main/views/about.html',
        "<p>This is the about view.</p>"
    );

    $templateCache.put('main/views/main.html',
        "<form><switch id=enabled name=enabled ng-model=enabled class=green></switch><br>Enabled: {{ enabled }}</form><uib-tabset><hr><uib-tab heading=\"Number To Roman Calculator\"><div ng-include=\"'calculator/views/numeric/numeric_calculator.html'\"></div></uib-tab><uib-tab heading=\"Roman To Number Calculator\"><div ng-include=\"'calculator/views/roman/roman_calculator.html'\"></div></uib-tab></uib-tabset><hr>"
    );

    $templateCache.put('main/views/yeoman.html',
        "<div class=jumbotron><h1>'Allo, 'Allo!</h1><p class=lead><img src=images/yeoman.png alt=\"I'm Yeoman\"><br>Always a pleasure scaffolding your apps.</p><p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p></div><div class=\"row marketing\"><h4>HTML5 Boilerplate</h4><p>HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.</p><h4>Angular</h4><p>AngularJS is a toolset for building the framework most suited to your application development.</p><h4>Karma</h4><p>Spectacular Test Runner for JavaScript.</p></div>"
    );

}]);;
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

    ]);;
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

    ]);;
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

    ]);;
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

    ]);;
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
    }]);;
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
    }]);;
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
    ]);;
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
    }]);;
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
    ]);;
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

]);;
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

]);;
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
    ]);;
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
    ]);;
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
    ]);;
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
    ]);;
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
    });;
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
    });;
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

    ]);;
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
