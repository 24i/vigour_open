'use strict'
require('./style.less')
var app = window.app = require('vigour-element/lib/app')
var open = require('../lib/')
// open.init()
open.set({
  val: true, // activate open
  name: {
    on: {
      data: {
        example () {
          console.log('######## NAME HAS CHANGED=====> ', this.val)
        }
      }
    }
  },
  url: {
    on: {
      data: {
        example () {
          console.log('######## URL HAS CHANGED=====> ', this.val)
        }
      }
    }
  }
})

app.set({
  title: {
    node: 'h1',
    text: 'Open Test!'
  },
  button: {
    node: 'button',
    text: 'vigour.io',
    on: {
      click () {
        console.log('hey!')
        open.url.val = 'http://vigour.io'
      }
    }
  }
})

open.on('error', function (err) {
  console.error(err)
})

open.ready.on(() => {
  console.log('---- open.ready!')
})
console.log('open', open)
console.log('open.name', open.name)
console.log('open.url', open.url)
console.log('open.name.val', open.name.val)
console.log('open.url.val', open.url.val)
