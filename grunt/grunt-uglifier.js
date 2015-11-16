/** 
    My job is to minify CSS and JS files.
    I also insert a comment into those files with the current app version and date.
    The version number is taken from the package.json file found in the root of WebUX
    @see //https://github.com/gruntjs/grunt-contrib-uglify
*/
module.exports = function (grunt, app) {
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
                //banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd HH:MM TT") %> */'
            },
            files: {
                'app/build/applib.js': [
                    'app/build/applib-debug.js'
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
                mangle: true,
                sourceMap: true,
                preserveComments: false,
                //banner: '/*! <%= pkg.name %> - v<%= pkg.version %> */'
            },
            files: {
                'app/build/vendor.min.js': [
                    'app/build/vendor.concat.js']
            }
        },
        templates: {
            config: {

            },
            options: {
                compress: {},
                beautify: false,
                mangle: true,
                sourceMap: false,
                preserveComments: false,
                //banner: '/*! <%= pkg.name %> - v<%= pkg.version %> */'
            },
            files: {
                'app/build/templates.min.js': [
                    'app/build/templates.js']
            }
        }
    };

    return config;
};
