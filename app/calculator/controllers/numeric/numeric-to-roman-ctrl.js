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
