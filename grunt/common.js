var extend = require('util')._extend;

module.exports = function(grunt){

/*
organize all the data that will be made available to grunt tasks
*/
    var obj = {
        buildDir: 'app/build/',
        pkg: grunt.file.readJSON('package.json')
    };

    return obj;
};
