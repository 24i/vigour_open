'use strict'

exports._platform = {
  on: {
    init: {
      init () {
        console.log('else')
        setTimeout(() => {
          let plugin = this.parent
          plugin.ready.val = true
          // this.emit(ERROR, 'Open script load error')
        }, 10)
      }
    },
    open: {
      open (obj) {
        console.log('opening', obj.data)
        console.log('then', obj.done)
        setTimeout(() => {
          obj.done()
        }, 10)
      }
    }
  }
}
