ArrayBuffer loader for webpack
------------------------------

## Getting Started

```
$ npm install arraybuffer-loader --save-dev
```

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

```
var buffer = require('arraybuffer!./data.dat')
var array  = new Uint8Array(buffer)

// Enjoy!!
```

## License
MIT
