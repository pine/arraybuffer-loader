'use strict'

const loaderUtils = require('loader-utils')

module.exports = function (content) {
  if (this.cacheable) { this.cacheable() }

  const toArrayBufferPath =
    loaderUtils.stringifyRequest(this, require.resolve('./to-array-buffer.js'))

  const base64Data = typeof content === 'string' ?
    new Buffer(content).toString('base64') : content.toString('base64')

  return `module.exports = require(${toArrayBufferPath})("${base64Data}")`;
}
