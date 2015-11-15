/** 
    My job is to format the specified the js files.
*/
module.exports = function (grunt) {
    var config = {
        "format": {
            src: ['app/**/*.js'],
            options: {
                js: {
                    indentChar: " ",
                    indentLevel: 0,
                    indentSize: 4,
                    mode: "VERIFY_AND_WRITE",
                    //Needed for git
                    end_with_newline: true,
                    //Needed for VS
                    eol: "\\r\\n",
                    preserveNewlines: true,
                    maxPreserveNewlines: 2
                }
            }
        }
    };
    return config;
};

