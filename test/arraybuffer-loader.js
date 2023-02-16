'use strict'

var TextDecoder = require('text-encoding').TextDecoder
var expect = require('chai').expect

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

describe('binary files', function () {
  it('can bundle binary file', function () {
    var buffer   = require('arraybuffer!./data/binary.dat')
    var binarray = new Uint8Array(buffer)
    var array    = Array.prototype.slice.call(binarray) // Array.from

    expect(array).to.deep.equal([ 0x01, 0x02, 0x04, 0x00 ])
  })

  it('can bundle empty file', function () {
    var buffer   = require('arraybuffer!./data/empty.dat')
    var binarray = new Uint8Array(buffer)

    expect(binarray.length).to.have.length.equal(0)
  })

  it('can bundle a massive file', function () {
    // source: https://github.com/datasets/world-cities/blob/34baffd/data/world-cities.csv
    var buffer   = require('arraybuffer!./data/world-cities.csv')
    var binarray = new Uint8Array(buffer)

    expect(binarray.length).to.have.length.equal(872568)
  })
})
