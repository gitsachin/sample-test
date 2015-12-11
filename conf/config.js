var HtmlReporter = require('protractor-html-screenshot-reporter');
var reporter=new HtmlReporter({
  baseDirectory: './protractor-result', // a location to store screen shots.
  docTitle: 'credacious Reporter',
  docName:    'credacious-tests-report.html'
});
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['../testScripts/*'],

  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 80000
  }
};
