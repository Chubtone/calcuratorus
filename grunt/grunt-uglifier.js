/** 
    My job is to minify CSS and JS files.
    I also insert a comment into those files with the current app version and date.
    The version number is taken from the package.json file found in the root of WebUX
    @see //https://github.com/gruntjs/grunt-contrib-uglify
*/
module.exports = function (grunt) {

    var config = {
        applib: {
            config: {

            },
            options: {
                //https://github.com/gruntjs/grunt-contrib-uglify/issues/298
                compress: {},
                beautify: false,
                mangle: false,
                sourceMap: true,
                sourceMapIncludeSources: false,
                preserveComments: false,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd HH:MM TT") %> */'
            },
            files: {
                'build/applib.js': [
                    'build/applib-debug.js'
                ]
            }
        },
        appconfig: {
            options: {
                compress: {},
                beautify: false,
                mangle: false,
                sourceMap: true,
                sourceMapIncludeSources: false,
                preserveComments: false,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd HH:MM TT") %> */'
            },
            files: {
                'build/dell.premier.app.ng-min.js': [
                    'js/app.js',
                    'build/templates.js'
                ]
            }
        },
        vendorlib: {
            config: {

            },
            options: {
                //https://github.com/gruntjs/grunt-contrib-uglify/issues/298
                compress: {},
                beautify: false,
                mangle: false,
                sourceMap: true,
                preserveComments: false,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> */'
            },
            files: {
                'build/vendor.min.js': [
                    'build/vendor.concat.js']
            }
        }
    };

    return config;
};
