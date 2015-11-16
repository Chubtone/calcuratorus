'use strict';
describe("Common Services Tests : Utils", function () {
    'use strict';

    var util,
        scope;

    // load the controller's module
    beforeEach(module('calcuratorusApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, utils ) {
        scope = $rootScope.$new();
         util = utils;
    }));

    describe('when using the utility class', function () {
        it('should determine if argument is integer with a good arg', function () {
            expect(util).toBeDefined();
            expect(util.isInteger(123)).toEqual(true);
        });

        it('should determine if argument is integer with a bad arg', function () {
            expect(util).toBeDefined();
            expect(util.isInteger('Some Bad Argument')).toEqual(false);
        });
    });


});
