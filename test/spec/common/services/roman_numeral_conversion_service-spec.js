'use strict';
describe("Common Services Tests : Utils", function () {
    'use strict';

    var convService,
        scope;

    // load the controller's module
    beforeEach(module('calcuratorusApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, roman_numeral_conversion ) {
        scope = $rootScope.$new();
        convService = roman_numeral_conversion;
    }));


    describe('when using the utility class', function () {
        it('should convert an integer to roman numeral', function () {
            expect(convService).toBeDefined();
            expect(convService.covertNumberToRoman(1999)).toEqual('MCMXCIX');
        });

        it('should convert an string representation of an int to roman numeral', function () {
            expect(convService).toBeDefined();
            expect(convService.covertNumberToRoman('2001')).toEqual('MMI');
        });

        it('should round float values and convert to roman', function () {
            expect(convService).toBeDefined();
            expect(convService.covertNumberToRoman(1.345)).toEqual('I');
            expect(convService.covertNumberToRoman(1.999)).toEqual('II');
        });

        it('should not break when a non-numeric value is passed in', function () {
            expect(convService).toBeDefined();
            expect(convService.covertNumberToRoman('My Bad Arg')).toEqual('');
        });

    });


});
