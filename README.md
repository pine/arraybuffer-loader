# arraybuffer-loader &nbsp;&nbsp;[![npm](https://img.shields.io/npm/v/arraybuffer-loader.svg?maxAge=2592000)](https://www.npmjs.org/package/arraybuffer-loader) [![build](https://github.com/pine/arraybuffer-loader/actions/workflows/build.yml/badge.svg)](https://github.com/pine/arraybuffer-loader/actions/workflows/build.yml) [![License](https://img.shields.io/github/license/emoji-gen/clone-into.svg)](LICENSE)

:dvd: ArrayBuffer loader for webpack

<br>
<br>

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
  rules: [
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
  rules: [
    {
      test: /\.wasm$/,
      type: 'javascript/auto',
      loaders: ['arraybuffer-loader'],
    },
  ],
},
```

## License
MIT &copy; [Pine Mizune](https://profile.pine.moe)
