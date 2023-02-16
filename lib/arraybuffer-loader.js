'use strict';

const loaderUtils = require("loader-utils");

function str2buf(content) {
  const array = new Array();
  for (let i = 0; i < content.length; i++) {
    array[i] = content[i];
  }
  return array;
}

/** @see {@link TextDecoder.decode}: inspiration for compression. */
function decode(x) { return x.toString(16).padStart(2, '0'); }

module.exports = function(content) {
  if (this.cacheable) {
    this.cacheable();
  }

  const request = require.resolve("./to-array-buffer.js");

  // loader-utils stringifyRequest was deprecated
  const toArrayBufferPath =
    this.utils && this.utils.contextify
      ? JSON.stringify(
          this.utils.contextify(this.context || this.rootContext, request)
        )
      : loaderUtils.stringifyRequest(this, request);

  const buffer = str2buf(content);
  const stream = buffer.map(decode).join('');

  return `module.exports = require(${toArrayBufferPath})("${stream}")`;
};

module.exports.raw = true;
