"use strict";

const loaderUtils = require("loader-utils");

module.exports = function (content) {
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

  const base64Data = content.toString("base64");

  return `module.exports = require(${toArrayBufferPath})("${base64Data}")`;
};

module.exports.raw = true;
