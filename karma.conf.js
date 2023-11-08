
module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-webpack'),
        require('karma-coverage'),
        require('karma-remap-istanbul'),
        require('karma-chrome-launcher'),
      ],
      client: {
        clearContext: false,
        jasmine: {
          random: false
        }
      },
      reporters: ['progress', 'kjhtml', 'junit', 'spec'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['ChromeHeadless'],
      singleRun: false,
      restartOnFileChange: true
    });
  };
  