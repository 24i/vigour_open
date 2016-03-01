var pkg = require('vigour-package')
var config = pkg.open

module.exports = {
  inject: config,
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
