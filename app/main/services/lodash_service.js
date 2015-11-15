/*global angular, _ */
(function(module, _) {
    'use strict';

    // https://lodash.com/docs
    // I provide an augmented lodash library.
    module('calcuratorusApp').factory("_",
        function() {
            // Return the public API.
            return _;
        }
    );

})(angular.module, _.noConflict());
// Release the global reference to the lodash library. This way, we make sure
// that everyone goes through our service object in order to get to the utility library.
// https://lodash.com/docs#noConflict
