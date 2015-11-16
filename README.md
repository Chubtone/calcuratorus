# Calcuratorus

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

## Instructions
 
- If you don't already have node installed, go to https://nodejs.org/en/

- Download and install Node.js, which includes the npm (node package manager) installer

- Open a command prompt at the same level as the Gruntfile.js, or /calcatorus


## Build & development

- Run `grunt` for building and `grunt serve` for preview.
- Run `grunt jsbeautifier` to format the JavaScript files in the app
- Run `grunt ngtemplates` to convert all of the HTML partials used in the app to JSON, and add them to the Angular $templateCache. (More here: https://docs.angularjs.org/api/ng/service/$templateCache). This allows the HTML partials to compressed, loaded into the client on app startup, and avoids the overhead of multiple HTTP requests to the web server.
- Run `grunt jshint` to run jshint and check for common coding mistakes in the JavaScript codes


## Running the app
- Enter values between 1 and 4999 either by the keypad or the input box.
- Clicking the equals button will convert a value to a roman numeral, even if no mathematical operation has been specified
- Enter multiple values seperated by mathematical operations (+, -, /, *). After clicking '=', the numeric and roman numeral value will be displayed after completing the computation

## Testing

- Running `grunt test` will run the unit tests with karma (uses PhantomJS)
- Running `grunt karma:chrome` will run the unit tests with karma inside in instance of Chrome
- Running `grunt karma:coverage` will create a js unit test coverage report (found in the /test/coverage directory)

