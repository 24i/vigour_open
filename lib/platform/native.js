'use strict'
var pkg = require('../../package.json')
exports._platform = {
  inject: require('vigour-wrapper-bridge/lib/plugin/injection')(pkg.name),
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
        var url = obj.url
        this.send('open', { url }, (err, res) => {
          if (!err) {
            obj.done && obj.done()
          } else {
            if (obj.done) {
              obj.done(true)
            } else {
              console.warn('Unhandled exception', 'open', err)
            }
          }
        })
      }
    }
  }
}
