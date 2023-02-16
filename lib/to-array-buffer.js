"use strict";

module.exports = function (base64Data) {
  var global =
    typeof window !== "undefined"
      ? window
      : typeof self !== "undefined"
      ? self
      : undefined;

  var binary =
    global && typeof global.atob === "function"
      ? global.atob(base64Data)
      : Buffer.from(base64Data, "base64").toString("binary");

  var bytes = new Uint8Array(binary.length);

  for (var i = 0; i < binary.length; ++i) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes.buffer;
};
