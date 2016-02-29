'use strict'
var Plugin = require('vigour-wrapper-bridge/lib/plugin')
var env = require('vigour-env')
var Config = require('vigour-config')
var config = new Config().open
env = env.serialize()

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
    config && config.serialize()
  ]
} else {
  pluginObj.inject = require('./platform')
}

module.exports = new Plugin(pluginObj)
