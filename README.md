ArrayBuffer loader for webpack
------------------------------

[![npm](https://img.shields.io/npm/v/arraybuffer-loader.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.org/package/arraybuffer-loader)
[![Travis](https://img.shields.io/travis/pine/arraybuffer-loader/master.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/pine/arraybuffer-loader)
[![Dependency Status](https://img.shields.io/david/pine/arraybuffer-loader.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/pine/is-lo)
[![devDependency Status](https://img.shields.io/david/dev/pine/arraybuffer-loader.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/pine/is-lo#info=devDependencies)


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
