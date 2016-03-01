'use strict'

exports._platform = {
  on: {
    init: {
      init () {
        setTimeout(() => {
          let plugin = this.parent
          plugin.ready.val = true
          // this.emit(ERROR, 'Open script load error')
        }, 10)
      }
    },
    open: {
      open (obj) {
        // console.log('opening', obj.url, obj.target)
        setTimeout(() => {
          obj.done && obj.done()
        }, 10)
      }
    }
  }
}
