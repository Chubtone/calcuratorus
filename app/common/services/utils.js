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
