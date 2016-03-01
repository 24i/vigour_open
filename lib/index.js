'use strict'
var Plugin = require('vigour-wrapper-bridge/lib/plugin')
var shared = require('./shared')
var platform = require('./platform')

module.exports = new Plugin({
  inject: [shared, platform]
})
