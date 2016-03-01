'use strict'

var Plugin = require('vigour-wrapper-bridge/lib/plugin')
var shared = require('../lib/shared')

const URL = 'http://vigour.io'

module.exports = function (inject, type) {

  var open

  it('require open', function () {
    if (inject) {
      open = new Plugin({
        inject: [shared, inject]
      })
    } else {
      open = require('../lib')
    }
  })

  it('can be activated', function (done) {
    open.once(function () {
      done()
    })
    open.set({
      val: true
    })
  })

  it('open a page', function (done) {
    open.open(URL, '_self', done)
  })

  it('open a page in a new tab', function (done) {
    open.open(URL, '_blank', done)
  })

  it('open a page in a named tab', function (done) {
    open.open(URL, 'shawn', done)
  })
}
