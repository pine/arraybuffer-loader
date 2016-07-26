'use strict'

var TextDecoder = require('text-encoding').TextDecoder

describe('text files', function () {
  it('can bundle ascii text file', function () {
    var buffer = require('arraybuffer!./data/ascii.txt')
    var array  = new Uint8Array(buffer)
    var text   = new TextDecoder('utf-8').decode(array)

    expect(text).to.equal('Hello, World!!\n')
  })

  it('can bundle multi byte test file', function () {
    var buffer = require('arraybuffer!./data/multi-byte.txt')
    var array  = new Uint8Array(buffer)
    var text   = new TextDecoder('utf-8').decode(array)

    expect(text).to.equal('\uD83D\uDE07\n') // :innocent:
  })
})
