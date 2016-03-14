'use strict'
exports._platform = {
  on: {
    init: {
      init (data) {
        let plugin = this.parent
        plugin.ready.val = true
        // this.emit(ERROR, 'Open script load error')
      }
    },
    open: {
      open (obj) {
        var platform = this
        try {
          if (obj.target && obj.target !== '_self') {
            window.open(obj.url, obj.target)
          } else {
            window.location = obj.url
          }
          obj.done && obj.done()
        } catch (e) {
          platform.emit('error', e)
          obj.done(true)
        }
      }
    }
  }
}
