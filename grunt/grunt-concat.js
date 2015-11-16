/**
    The concat task places the scripts in a pre-defined order.
    This can be later minified so the order is not broken.
    Without this, uglify task will put scripts in it's own order
*/
module.exports = function (grunt, app) {
    var config = {
        codez: {
            options: {
                separator: ';',
                stripBanners: true,
                process: function (data, file) {
                    return '\n//ORIGINAL-FILE: ' + file + '\n' + data;
                }
            },
            files: [
            {
                src: ['app/main/app.js', 'app/calculator/**/*.js', 'app/common/**/*.js', 'app/keypad/**/*.js', 'app/main/**/*.js'],
                dest: 'app/build/applib-debug.js'
            }
            ]
        },
        vendor: {
            options: {
                separator: ';',
                stripBanners: true,
                process: function (data, file) {
                    return '\n//ORIGINAL-FILE: ' + file + '\n' + data;
                }
            },
            files: [
            {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-animate/angular-animate.js',
                    'bower_components/angular-cookies/angular-cookies.js',
                    'bower_components/angular-resource/angular-resource.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-sanitize/angular-sanitize.js',
                    'bower_components/angular-touch/angular-touch.js',
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                    'bower_components/lodash/lodash.js',
                    'bower_components/angular-ui-switch/angular-ui-switch.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js'
                ],
                dest: 'app/build/vendor.concat.js'
            }
            ]
        }

    };
    return config;
};
