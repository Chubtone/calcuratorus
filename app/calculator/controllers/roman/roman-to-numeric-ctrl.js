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
