ArrayBuffer loader for webpack
------------------------------

[![Travis](https://img.shields.io/travis/pine/arraybuffer-loader/master.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/pine/arraybuffer-loader)

## Getting Started

```
$ npm install arraybuffer-loader --save-dev
```

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

```js
var buffer = require('arraybuffer!./data.dat')
var array  = new Uint8Array(buffer)

// Enjoy!!
```

## License
MIT
