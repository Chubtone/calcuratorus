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
