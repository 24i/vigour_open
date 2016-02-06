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
    console.log('a')
    try {
      open.url.on('data', (data) => {
        done()
      })
      open.url.val = URL
    } catch (e) {
      throw new Error('FUCKSAKE')
    }
  })
}
