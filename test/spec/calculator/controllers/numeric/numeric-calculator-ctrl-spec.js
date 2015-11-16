'use strict';
describe("Calculator Controller Tests : numericCalculatorCtrl", function () {

    // load the controller's module
    beforeEach(module('calcuratorusApp'));

    var numericCalculatorCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, roman_numeral_conversion) {
        scope = $rootScope.$new();
        numericCalculatorCtrl = $controller('numericCalculatorCtrl', {
            $scope: scope,
            roman_numeral_conversion: roman_numeral_conversion
        });
    }));

    describe('when using the numericCalculatorCtrl', function () {
        it('should perform an addition operation ', function () {

            var myTestFunction = {
                returnValue : null,
                test: function (event, args) {
                    this.returnValue = args;
                    return true;
                } ,
                apply: function (event, args) {
                    this.test(event, args);
                    this.returnValue = args[1];
                }
            };

            scope.$on('valueConverted', myTestFunction);
            spyOn(myTestFunction, 'test');

            scope.inputValues = [10, 2];
            scope.mathOperation = '+';
            numericCalculatorCtrl.handleEquals();

            expect(numericCalculatorCtrl).toBeDefined();
            expect(myTestFunction.test).toHaveBeenCalled();
            expect(myTestFunction.returnValue).toEqual('XII');
        });


    });
});
