'use strict'

const path = require('path')

module.exports = function(config) {

  config.set({
    basePath: '',
    files: [
      'test/**/*.js',
    ],
    exclude: [],
    preprocessors: {
      'test/**/*.js': ['webpack', 'sourcemap'],
    },

    frameworks: ['mocha'],
    reporters: ['mocha', 'saucelabs'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,

    concurrency: 1,

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [],
      },
      resolveLoader: {
        alias: {
          'arraybuffer': path.join(__dirname, './'),
        },
      },
      resolve: {
        extensions: ['.js', '.json']
      },
      mode: 'development',
    },
    webpackMiddleware: {
      noInfo: true,
    },
  })
}
