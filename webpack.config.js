'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  target: 'node',
  entry: './test/arraybuffer-loader.js',
  output: {
    path: path.join(__dirname, 'test'),
    filename: 'arraybuffer-loader.bundle.js',
  },
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
}
