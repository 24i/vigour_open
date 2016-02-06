'use strict'
const URL = 'http://vigour.io'
module.exports = function (inject, type) {
  var open

  it('require open', function () {
    open = require('../lib')
  })

  if (inject) {
    it('create instance with mock properties', function () {
      open = new open.Constructor(inject)
    })
  }

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
