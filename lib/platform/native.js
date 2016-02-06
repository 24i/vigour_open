'use strict'
var pkg = require('../../package.json')
exports._platform = {
  inject: require('vigour-wrapper/lib/bridge/inject')(pkg.name),
  on: {
    init: {
      init () {
        this.send('init', {}, (err, res) => {
          if (!err) {
            this.parent.set({
              ready: true
            })
          }
        })
      }
    },
    open: {
      open (obj) {
        var url = obj.data
        this.send('open', { url }, (err, res) => {
          if (!err) {
            obj.done()
          } else {
            obj.done(true)
          }
        })
      }
    }
  }
}
