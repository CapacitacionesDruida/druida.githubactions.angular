
module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-coverage'),
        require('karma-chrome-launcher'),
        require('@angular-devkit/build-angular/plugins/karma'),
      ],
      client: {
        clearContext: false,
        jasmine: {
          random: false
        }
      },
      files: [
        { pattern: './src/assets/**', watched:true, included:true, nocache:false, served:true }
      ],
      proxies: {
        '/assets/': '/base/src/assets/'
      },
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['ChromeHeadless'],
      singleRun: false,
      restartOnFileChange: true
    });
  };
  