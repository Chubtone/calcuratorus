/** 
    My job is to compress all the HTML Angular templates in the app
    for use with Angular's $templateCache.
    Allows us to compress everything into one file
*/
module.exports = function (grunt, app) {
    var task = {
        ngtemplates: {
            cwd: 'js',
            //src: '**/**.html',
            src: '**/**/*.html',
            //src: [
             //   'app/**/**.html'
            //],
            dest: 'build/templates.js',
            options: {
               // angular: 'ng',
                module: 'calcuratorusApp',
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true, // Only if you don't use comment directives!   
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }//,
                //prefix: 'app/js/'
            }
        }
        },
    dist = {
        options: {
            module: 'calcuratorusApp',
            htmlmin: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true, // Only if you don't use comment directives!
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        },
        cwd: 'js',
            src: 'main/{,*/}*.html',
            dest: '.tmp/templateCache.js'
    }
    return  task;
};

