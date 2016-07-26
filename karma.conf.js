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

    frameworks: ['mocha', 'chai'],
    reporters: ['mocha'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS2'],
    singleRun: true,

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [],
      },
      resolveLoader: {
        alias: {
          'arraybuffer': path.join(__dirname, './'),
        },
      },
      resolve: {
        extensions: ['', '.js', '.json']
      },
    },
    webpackMiddleware: {
      noInfo: true,
    },
  })
}
