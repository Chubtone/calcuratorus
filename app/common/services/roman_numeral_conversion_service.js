angular.module('calcuratorusApp').factory('roman_numeral_conversion', [
    function roman_numeral_conversion() {
        "use strict";

        var convert100s = function(h) {
            var m = '';
            h = Math.floor((h % 1000) / 100);
            if (h === 9) {
                m = 'CM';
            } else if (h > 4) {
                m = 'DCCC'.substr(0, h - 4);
            } else if (h === 4) {
                m = 'CD';
            } else {
                m = 'CCC'.substr(0, h);
            }
            return m;
        };
        /*
        var convert100a = function(h) {
            var m = '',
                h = Math.floor((h % 1000) / 100);
            if (h > 4) {
                m = 'DCCCC'.substr(0, h - 4)
            } else {
                m = 'CCCC'.substr(0, h)
            };
            return m;
        }; */

        var convert10s = function(t) {
            var m = '';
            t = Math.floor((t % 100) / 10);
            if (t === 9) {
                m = 'XC';
            } else if (t > 4) {
                m = 'LXXX'.substr(0, t - 4);
            } else if (t === 4) {
                m = 'XL';
            } else {
                m = 'XXX'.substr(0, t);
            }
            return m;
        };
        /*
         var convert10a = function(t) {
             var m = '',
                 t = Math.floor((t % 100) / 10);
             if (t > 4) {
                 m = 'LXXXX'.substr(0, t - 4)
             } else {
                 m = 'XXXX'.substr(0, t)
             };
             return m;
         } */

        var convert1s = function(u) {
            var m = '';
            u = u % 10;
            if (u === 9) {
                m = 'IX';
            } else if (u > 4) {
                m = 'VIII'.substr(0, u - 4);
            } else if (u === 4) {
                m = 'IV';
            } else {
                m = 'III'.substr(0, u);
            }
            return m;
        };

        /*
        var convert1a = function(u) {
            var m = '',
                u = u % 10;
            if (u > 4) {
                m = 'VIIII'.substr(0, u - 4)
            } else {
                m = 'IIII'.substr(0, u)
            };
            return m;
        }; */

        var convert1000s = function(n) {
            return ('MMMM'.substr(0, (Math.floor(n / 1000))));
        };

        var converts = function(n) {
            return (convert1000s(n) + convert100s(n) + convert10s(n) + convert1s(n));
        };

        var covertNumberToRoman = function(inputValue) {

            var msg, num = '',
                i = 0,
                n = 0;

            //while (inputValue.charAt(0) == ' ') {inputValue = inputValue.substr(1)};
            //if (inputValue.indexOf(' ') != -1) {inputValue = inputValue.substr(0, inputValue.indexOf(' '))}

            if (inputValue === '') {
                //alert('No data was input');
                return '';
            } else {
                if (isNaN(inputValue)) {
                    num = inputValue;
                    if (num === num.toLowerCase()) {
                        i = num.indexOf('u');
                        if (i !== -1) {
                            num = num.substr(0, i) + 'v' + num.substr(i + 1, num.length - i);
                        }
                        if (num.substr(num.length - 2, 2) === 'ij') {
                            num = num.substr(0, num.length - 2) + 'ii';
                        }
                    }
                    n = evalRoman(num);
                    if (n === -1) {
                        //alert(inputValue + ' is not a valid input');
                        msg = '';
                    } else {
                        msg = n;
                    }
                } else {
                    n = Math.round(parseFloat(inputValue));
                    if (n < 1 || n > 4999) {
                        alert('Input must be in the range of 1 to 4999');
                        return '';
                    } else {
                        if (n !== parseFloat(inputValue)) {
                            alert(inputValue + ' will be rounded to ' + n);
                        }
                        msg = converts(n);
                    }
                }
            }
            return msg;
            /*
            var result = null;

            ///////
            //Make sure value is number and integer
            if (value && _.isNumber(value) && utils.isInteger(value)) {
                $log.debug('Converting ' + value);

                var byTwo = ((value % 2) === 0);

                if (byTwo) {
                    result = 'II';
                }

                var byThree = ((value % 3) === 0);

                if (byThree) {
                    result = 'III';
                }

                var byFour = ((value % 4) === 0);

                result = 'IV';

                var byFive = ((value % 5) === 0);

                result = 'V';

                var byTen = ((value % 10) === 0);

                result = 'X';

                var byFifty = ((value % 50) === 0);

                result = 'L';

                var byHundred = ((value % 100) === 0);

                result = 'X';

                var byFiveHundred = ((value % 500) === 0);

                result = 'D';

                var byThousand = ((value % 1000) === 0);

                result = 'M';

            }

            return result; */
        };

        var covertRomanToNumber = function(value) {
            return value;
        };

        return {
            covertNumberToRoman: covertNumberToRoman,
            covertRomanToNumber: covertRomanToNumber
        };
    }

]);
