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
            controller: 'numericCalculatorCtrl',
            link: function() {
                $log.debug('Parent numericCalculator directive linked');
            }
        };
    }]);
