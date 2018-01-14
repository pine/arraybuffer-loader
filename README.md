ArrayBuffer loader for webpack
------------------------------

[![NPM](https://nodei.co/npm/arraybuffer-loader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/arraybuffer-loader/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpine%2Farraybuffer-loader.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpine%2Farraybuffer-loader?ref=badge_shield)

[![npm](https://img.shields.io/npm/v/arraybuffer-loader.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.org/package/arraybuffer-loader)
[![Travis](https://img.shields.io/travis/pine/arraybuffer-loader/master.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/pine/arraybuffer-loader)
[![Build Status](https://img.shields.io/appveyor/ci/pine/arraybuffer-loader/master.svg?style=flat-square&maxAge=2592000)](https://ci.appveyor.com/project/pine/arraybuffer-loader/branch/master)
[![Dependency Status](https://img.shields.io/david/pine/arraybuffer-loader.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/pine/arraybuffer-loader)
[![devDependency Status](https://img.shields.io/david/dev/pine/arraybuffer-loader.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/pine/arraybuffer-loader?type=dev)


## Getting Started


```
$ yarn add arraybuffer-loader
```

or

```
$ npm install arraybuffer-loader --save-dev
```

## Usage

See offical document [Loaders](https://webpack.js.org/concepts/loaders/).

```js
var buffer = require('arraybuffer!./data.dat')
var array  = new Uint8Array(buffer)

// Enjoy!!
```

## License
MIT &copy; Pine Mizune


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpine%2Farraybuffer-loader.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpine%2Farraybuffer-loader?ref=badge_large)