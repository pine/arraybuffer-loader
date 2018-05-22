ArrayBuffer loader for webpack
------------------------------

[![NPM](https://nodei.co/npm/arraybuffer-loader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/arraybuffer-loader/)

[![npm](https://img.shields.io/npm/v/arraybuffer-loader.svg?maxAge=2592000)](https://www.npmjs.org/package/arraybuffer-loader)
[![Travis](https://img.shields.io/travis/pine/arraybuffer-loader/master.svg?maxAge=2592000)](https://travis-ci.org/pine/arraybuffer-loader)
[![Build status](https://ci.appveyor.com/api/projects/status/0p14m3bkv130m916/branch/master?svg=true)](https://ci.appveyor.com/project/pine/arraybuffer-loader/branch/master)
[![Dependency Status](https://img.shields.io/david/pine/arraybuffer-loader.svg?maxAge=2592000)](https://david-dm.org/pine/arraybuffer-loader)
[![devDependency Status](https://img.shields.io/david/dev/pine/arraybuffer-loader.svg?maxAge=2592000)](https://david-dm.org/pine/arraybuffer-loader?type=dev)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpine%2Farraybuffer-loader.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpine%2Farraybuffer-loader?ref=badge_shield)
[![Greenkeeper badge](https://badges.greenkeeper.io/pine/arraybuffer-loader.svg)](https://greenkeeper.io/)


## Supported Platforms

- Modern Browsers (IE >= 10)
- Node.js

## Getting Started


```
$ yarn add arraybuffer-loader
```

or

```
$ npm install arraybuffer-loader --save-dev
```

## Usage
If you read only the specific extensions (e.g. wasm), please add loader in `webpack.config.js`.

```js
module: {
  loaders: [
    {
      test: /\.png$/,
      loaders: ['arraybuffer-loader'],
    },
  ],
},
```

Or if reading an arbitrary extension, use `require`.

```js
const buffer = require('arraybuffer!./data.dat')
const array = new Uint8Array(buffer)
```

See also offical document [Loaders](https://webpack.js.org/concepts/loaders/).

### For `.wasm` file
Webpack 4 or later has embedded WASM parser. So, please set `type: 'javascript/auto'` when use `arraybuffer-loader`.

```js
module: {
  loaders: [
    {
      test: /\.wasm$/,
      type: 'javascript/auto',
      loaders: ['arraybuffer-loader'],
    },
  ],
},
```

## License
MIT &copy; Pine Mizune


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpine%2Farraybuffer-loader.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpine%2Farraybuffer-loader?ref=badge_large)
