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
        console.log('obj', obj)
        try {
          window.location = obj.data
          obj.done()
        } catch (e) {
          platform.emit('error', e)
          obj.done(true)
        }
      }
    }
  }
}
