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
