angular.module('calcuratorusApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('404.html',
    "<!doctype html><html lang=en><head><meta charset=utf-8><title>Page Not Found :(</title><style>::-moz-selection {\n" +
    "        background: #b3d4fc;\n" +
    "        text-shadow: none;\n" +
    "      }\n" +
    "\n" +
    "      ::selection {\n" +
    "        background: #b3d4fc;\n" +
    "        text-shadow: none;\n" +
    "      }\n" +
    "\n" +
    "      html {\n" +
    "        padding: 30px 10px;\n" +
    "        font-size: 20px;\n" +
    "        line-height: 1.4;\n" +
    "        color: #737373;\n" +
    "        background: #f0f0f0;\n" +
    "        -webkit-text-size-adjust: 100%;\n" +
    "        -ms-text-size-adjust: 100%;\n" +
    "      }\n" +
    "\n" +
    "      html,\n" +
    "      input {\n" +
    "        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n" +
    "      }\n" +
    "\n" +
    "      body {\n" +
    "        max-width: 500px;\n" +
    "        padding: 30px 20px 50px;\n" +
    "        border: 1px solid #b3b3b3;\n" +
    "        border-radius: 4px;\n" +
    "        margin: 0 auto;\n" +
    "        box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n" +
    "        background: #fcfcfc;\n" +
    "      }\n" +
    "\n" +
    "      h1 {\n" +
    "        margin: 0 10px;\n" +
    "        font-size: 50px;\n" +
    "        text-align: center;\n" +
    "      }\n" +
    "\n" +
    "      h1 span {\n" +
    "        color: #bbb;\n" +
    "      }\n" +
    "\n" +
    "      h3 {\n" +
    "        margin: 1.5em 0 0.5em;\n" +
    "      }\n" +
    "\n" +
    "      p {\n" +
    "        margin: 1em 0;\n" +
    "      }\n" +
    "\n" +
    "      ul {\n" +
    "        padding: 0 0 0 40px;\n" +
    "        margin: 1em 0;\n" +
    "      }\n" +
    "\n" +
    "      .container {\n" +
    "        max-width: 380px;\n" +
    "        margin: 0 auto;\n" +
    "      }\n" +
    "\n" +
    "      /* google search */\n" +
    "\n" +
    "      #goog-fixurl ul {\n" +
    "        list-style: none;\n" +
    "        padding: 0;\n" +
    "        margin: 0;\n" +
    "      }\n" +
    "\n" +
    "      #goog-fixurl form {\n" +
    "        margin: 0;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-qt,\n" +
    "      #goog-wm-sb {\n" +
    "        border: 1px solid #bbb;\n" +
    "        font-size: 16px;\n" +
    "        line-height: normal;\n" +
    "        vertical-align: top;\n" +
    "        color: #444;\n" +
    "        border-radius: 2px;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-qt {\n" +
    "        width: 220px;\n" +
    "        height: 20px;\n" +
    "        padding: 5px;\n" +
    "        margin: 5px 10px 0 0;\n" +
    "        box-shadow: inset 0 1px 1px #ccc;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-sb {\n" +
    "        display: inline-block;\n" +
    "        height: 32px;\n" +
    "        padding: 0 10px;\n" +
    "        margin: 5px 0 0;\n" +
    "        white-space: nowrap;\n" +
    "        cursor: pointer;\n" +
    "        background-color: #f5f5f5;\n" +
    "        background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        -webkit-appearance: none;\n" +
    "        -moz-appearance: none;\n" +
    "        appearance: none;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-sb:hover,\n" +
    "      #goog-wm-sb:focus {\n" +
    "        border-color: #aaa;\n" +
    "        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n" +
    "        background-color: #f8f8f8;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-qt:hover,\n" +
    "      #goog-wm-qt:focus {\n" +
    "        border-color: #105cb6;\n" +
    "        outline: 0;\n" +
    "        color: #222;\n" +
    "      }\n" +
    "\n" +
    "      input::-moz-focus-inner {\n" +
    "        padding: 0;\n" +
    "        border: 0;\n" +
    "      }</style></head><body><div class=container><h1>Not found <span>:(</span></h1><p>Sorry, but the page you were trying to view does not exist.</p><p>It looks like this was the result of either:</p><ul><li>a mistyped address</li><li>an out-of-date link</li></ul><script>var GOOG_FIXURL_LANG = (navigator.language || '').slice(0,2),GOOG_FIXURL_SITE = location.host;</script><script src=//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js></script></div></body></html>"
  );


  $templateCache.put('calculator/views/conversion_results.html',
    "<div><div>Converted Value</div><div class=container><div class=\"row keypad-row\"><div ng-bind=convertedText class=\"displayContainer converted-results\"></div></div></div></div>"
  );


  $templateCache.put('calculator/views/numeric/numeric_calculator.html',
    "<div class=jumbotron ng-controller=NumericToRomanCtrl><div><converted-results-directive class=pad></converted-results-directive></div><div class=displayContainer><numeric-calculator numeric-display class=typeNumber placeholder=\"0\"></div><div class=\"container keypadContainer\"><div class=row><numeric-calculator numeric-keypad-directive=\"\" class=col-sm-10></numeric-calculator><numeric-calculator function-keypad-directive class=col-sm-2></numeric-calculator></div></div></div>"
  );


  $templateCache.put('calculator/views/numeric/numeric_display.html',
    "<span><input id=numericInput class=displayInput ng-model=field placeholder=0><div ng-bind=operation></div></span>"
  );


  $templateCache.put('calculator/views/roman/roman_calculator.html',
    "<div class=jumbotron ng-controller=RomanToNumericCtrl><div><converted-results-directive class=pad></converted-results-directive></div><div class=displayContainer><div class=pad><roman-calculator roman-display class=typeNumber placeholder=\"0\"></div></div><div class=\"container keypadContainer\"><div class=row><roman-calculator roman-keypad-directive class=col-sm-10></roman-calculator><roman-calculator roman-function-keypad-directive class=col-sm-2></roman-calculator></div></div></div>"
  );


  $templateCache.put('calculator/views/roman/roman_display.html',
    "<span class=\"midfg xlarge\"><input id=numericInput class=displayInput ng-model=field placeholder=0><div ng-bind=operation></div></span>"
  );


  $templateCache.put('index.html',
    "<!doctype html><html lang=en><head><meta charset=utf-8><title></title><meta name=description content=\"\"><meta name=viewport content=\"width=device-width\"><link rel=stylesheet href=\"../bower_components/angular-ui-switch/angular-ui-switch.css\"><link rel=stylesheet href=styles/main.css><link rel=stylesheet href=\"../bower_components/bootstrap/dist/css/bootstrap.min.css\"></head><body ng-app=calcuratorusApp><!--[if lte IE 8]><p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade\n" +
    "  your browser</a> to improve your experience.</p><![endif]--><div class=header><div class=\"navbar navbar-default\" role=navigation><div class=container><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#js-navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=\"#/\">Calcuratorus</a></div><div class=\"collapse navbar-collapse\" id=js-navbar-collapse><ul class=\"nav navbar-nav\"><li class=active><a href=\"#/\">Home</a></li><li><a ng-href=#/about>About</a></li><li><a ng-href=\"#/\">Contact</a></li></ul></div></div></div></div><div class=container><div ng-view=\"\"></div></div><div class=footer><div class=container><p><span class=\"glyphicon glyphicon-heart\"></span> from the Yeoman team</p></div></div><script>!function (A, n, g, u, l, a, r) {\n" +
    "    A.GoogleAnalyticsObject = l, A[l] = A[l] || function () {\n" +
    "              (A[l].q = A[l].q || []).push(arguments)\n" +
    "            }, A[l].l = +new Date, a = n.createElement(g),\n" +
    "            r = n.getElementsByTagName(g)[0], a.src = u, r.parentNode.insertBefore(a, r)\n" +
    "  }(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');\n" +
    "\n" +
    "  ga('create', 'UA-XXXXX-X');\n" +
    "  ga('send', 'pageview');</script><script src=../bower_components/jquery/dist/jquery.js></script><script src=../bower_components/angular/angular.js></script><script src=../bower_components/angular-animate/angular-animate.js></script><script src=../bower_components/angular-cookies/angular-cookies.js></script><script src=../bower_components/angular-resource/angular-resource.js></script><script src=../bower_components/angular-route/angular-route.js></script><script src=../bower_components/angular-sanitize/angular-sanitize.js></script><script src=../bower_components/angular-touch/angular-touch.js></script><script src=../bower_components/angular-bootstrap/ui-bootstrap-tpls.js></script><script src=../bower_components/lodash/lodash.js></script><script src=../bower_components/angular-ui-switch/angular-ui-switch.js></script><script src=../bower_components/bootstrap/dist/js/bootstrap.js></script><script src=../bower_components/angular-ui-router/release/angular-ui-router.js></script><script src=main/app.js></script><script src=main/services/lodash_service.js></script><script src=main/controllers/main-ctrl.js></script><script src=main/controllers/about.js></script><script src=build/templates.js></script><script src=calculator/controllers/numeric/numeric-calculator-ctrl.js></script><script src=calculator/directives/converted-results-directive.js></script><script src=calculator/directives/numeric/numeric-calculator-directive.js></script><script src=calculator/directives/numeric/numeric-calculator-display.js></script><script src=calculator/controllers/numeric/numeric-to-roman-ctrl.js></script><script src=calculator/controllers/roman/roman-calculator-ctrl.js></script><script src=calculator/controllers/roman/roman-to-numeric-ctrl.js></script><script src=calculator/directives/roman/roman-calculator-directive.js></script><script src=calculator/directives/roman/roman-calculator-display.js></script><script src=common/services/utils.js></script><script src=common/services/roman_numeral_conversion_service.js></script><script src=keypad/directives/function-keypad-directive.js></script><script src=keypad/directives/numeric/numeric-keypad-directive.js></script><script src=keypad/directives/roman/roman-keypad-directive.js></script><script src=keypad/directives/roman/roman-function-keypad-directive.js></script></body></html>"
  );


  $templateCache.put('keypad/views/function_keypad.html',
    "<div class=keypad><div class=row><div class=col-sm-2><button type=button class=\"btn btn-primary btn-keypad\" value=\"/\" ng-click=handleFunction($event)>&divide;</button></div></div><div class=\"row keypad-row\"><div class=col-sm-2><button type=button class=\"btn btn-primary btn-keypad\" value=* ng-click=handleFunction($event)>&times;</button></div></div><div class=\"row keypad-row\"><div class=col-sm-2><button type=button class=\"btn btn-primary btn-keypad\" value=- ng-click=handleFunction($event)>&minus;</button></div></div><div class=\"row keypad-row\"><div class=col-sm-2><button type=button class=\"btn btn-primary btn-keypad\" value=+ ng-click=handleFunction($event)>&plus;</button></div></div><div class=\"row keypad-row\"><div class=col-sm-6><button type=button class=\"btn btn-primary btn-keypad\" value=\"=\" ng-click=handleEquals()>&equals;</button></div></div></div>"
  );


  $templateCache.put('keypad/views/numeric_keypad.html',
    "<div class=\"container keypad-container\"><div class=row><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=1 ng-click=handleKeypadInput($event)>1</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=2 ng-click=handleKeypadInput($event)>2</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=3 ng-click=handleKeypadInput($event)>3</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=4 ng-click=handleKeypadInput($event)>4</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=5 ng-click=handleKeypadInput($event)>5</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=6 ng-click=handleKeypadInput($event)>6</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=7 ng-click=handleKeypadInput($event)>7</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=8 ng-click=handleKeypadInput($event)>8</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=9 ng-click=handleKeypadInput($event)>9</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=clear ng-click=handleKeypadClear()>Clear</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=0 ng-click=handleKeypadInput($event)>0</button></div></div></div>"
  );


  $templateCache.put('keypad/views/roman_keypad.html',
    "<div class=container style=\"width: 400px\"><div class=row><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=1 ng-click=handleKeypadInput($event)>I</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=2 ng-click=handleKeypadInput($event)>II</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=3 ng-click=handleKeypadInput($event)>III</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=5 ng-click=handleKeypadInput($event)>V</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=10 ng-click=handleKeypadInput($event)>X</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=50 ng-click=handleKeypadInput($event)>L</button></div></div><div class=\"row keypad-row\"><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=100 ng-click=handleKeypadInput($event)>C</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=500 ng-click=handleKeypadInput($event)>D</button></div><div class=col-sm-4><button type=button class=\"btn btn-primary btnRoman\" value=1000 ng-click=handleKeypadInput($event)>M</button></div></div><div class=\"row keypad-row\"><div class=col-sm-12><button type=button class=\"btn btn-primary btnRoman\" value=clear ng-click=handleKeypadClear()>Clear</button></div></div></div>"
  );


  $templateCache.put('main/views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('main/views/main.html',
    "<form><switch id=enabled name=enabled ng-model=enabled class=green></switch><br>Enabled: {{ enabled }}</form><uib-tabset><hr><uib-tab heading=\"Number To Roman Calculator\"><div ng-include=\"'calculator/views/numeric/numeric_calculator.html'\"></div></uib-tab><uib-tab heading=\"Roman To Number Calculator\"><div ng-include=\"'calculator/views/roman/roman_calculator.html'\"></div></uib-tab></uib-tabset><hr>"
  );


  $templateCache.put('main/views/yeoman.html',
    "<div class=jumbotron><h1>'Allo, 'Allo!</h1><p class=lead><img src=images/yeoman.png alt=\"I'm Yeoman\"><br>Always a pleasure scaffolding your apps.</p><p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p></div><div class=\"row marketing\"><h4>HTML5 Boilerplate</h4><p>HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.</p><h4>Angular</h4><p>AngularJS is a toolset for building the framework most suited to your application development.</p><h4>Karma</h4><p>Spectacular Test Runner for JavaScript.</p></div>"
  );

}]);
