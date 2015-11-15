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
