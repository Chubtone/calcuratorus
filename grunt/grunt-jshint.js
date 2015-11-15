/** 
    My job is to run JSHint code quality check on specified files
*/
module.exports = function (grunt) {
    /*global document:false */
    var config = {
        mostFiles: {
            options: {
                "force": false,
                "node": false,
                "browser": true,
                //"es5": true,
                "esnext": true,
                "bitwise": true,
                //"camelcase": true,
                'devel': false,
                "curly": true,
                "eqeqeq": true,
                "immed": true,
                //"indent": 2,
                "latedef": true,
                "newcap": true,
                "noarg": true,
                //"quotmark": "single",
                //"regexp": true,
                "undef": true,
                "unused": true,
                "strict": true,
                "trailing": false,
                "smarttabs": true,
                "white": false,
                //"eqnull": true,
                //"jshintrc": true,
                "globals": {
                    "$": false,
                    'angular': true,
                    "browser": false,
                    "repeater": false,
                    "element": false,
                    "inject": false,
                    "afterEach": false,
                    "beforeEach": false,
                    "confirm": false,
                    "context": false,
                    "describe": false,
                    "expect": false,
                    "it": false,
                    "jasmine": false,
                    "JSHINT": false,
                    "mostRecentAjaxRequest": false,
                    "qq": false,
                    "runs": false,
                    "spyOn": false,
                    "spyOnEvent": false,
                    "waitsFor": false,
                    "xdescribe": false,
                    'document': true,
                    'window': true,
                    'LocationEx': true,
                    'ng': true,
                    'dellPremierApp': true,
                    'dellPremierApp_accessories': true,
                    'dellPremierApp_account': true,
                    'dellPremierApp_cart': true,
                    'dellPremierApp_common': true,
                    'dellPremierApp_compare': true,
                    'dellPremierApp_deals': true,
                    'dellPremierApp_fastTrack': true,
                    'dellPremierApp_productDetails': true,
                    'dellPremierApp_stdConfigs': true,
                    'dellPremierApp_templates': true,
                    'Dell': true,
                    'navigator': true,
                    'alert': true,
                    'GAPlugin': true
                }
            },
            files: {
                src: [
                    'app/**/*.js'
                ]
            }
        }
    };
    return config;
};

