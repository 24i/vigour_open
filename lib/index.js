'use strict'
var Plugin = require('vigour-wrapper/lib/plugin')
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
  url: {
    val: false,
    on: {
      data: {
        condition (data, done) {
          console.log('url', this.val)
          console.log('=======================done', done, done instanceof Function)
          this._platform.emit('open', { data: this.val, done })
        },
        val: function () {}
      }
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
