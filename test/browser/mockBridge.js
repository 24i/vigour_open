'use strict'
var bridge = require('vigour-wrapper-bridge')

bridge.label = 'mockBridge'
bridge.mock = {
  methods: {
    init (opt, cb) {
      // get current logged in status
      // in case of error > cb(err)
      // in case of not
      // 50/50 initial state logged out / in
      var response = { name: '_self' }
      // async callback
      setTimeout(() => {
        cb && cb(null, response)
      })
    },
    open (opts, cb, bridge) {
      setTimeout(function () {
        cb && cb(null)
      }, 10)
    }
  }
}

delete bridge.send

bridge.define({
  send (pluginId, fnName, opts, cb) {
    bridge.mock.methods[fnName](opts, cb, bridge)
  }
})

module.exports = bridge
