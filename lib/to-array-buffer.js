"use strict";

function encode(_, i) {
  return parseInt(this.charAt(2 * i) + this.charAt(2 * i + 1), 16);
}

module.exports = function (stream) {
  const buffer = new Array(stream.length / 2).fill().map(encode, stream);
  return buffer;
};
