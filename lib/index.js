'use strict'
var Plugin = require('vigour-wrapper-bridge/lib/plugin')
var pkg = require('vigour-package')
var config = pkg.open

var pluginObj = {
  on: {
    value: {
      open (data) {
        if (data === true) {
          this._platform.emit('init', data)
        }
      }
    }
  },
  define: {
    open (url, target, done) {
      this._platform.emit('open', { url, target, done })
    }
  }
}

if (config) {
  pluginObj.inject = [
    require('./platform'),
    config
  ]
} else {
  pluginObj.inject = require('./platform')
}

module.exports = new Plugin(pluginObj)
