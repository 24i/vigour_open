'use strict'
require('./style.less')
var app = window.app = require('vigour-element/lib/app')
var open = require('../lib/')
// open.init()
open.set({
  val: true // activate open
})

app.set({
  title: {
    node: 'h1',
    text: 'Open Test!'
  },
  inside: {
    node: 'button',
    text: 'vigour.io',
    on: {
      click () {
        open.open('http://vigour.io', '_self')
      }
    }
  },
  outside: {
    node: 'button',
    text: 'vigour.io (new tab)',
    on: {
      click () {
        open.open('http://vigour.io', '_blank')
      }
    }
  },
  remote: {
    node: 'button',
    text: 'vigour.io (named tab)',
    on: {
      click () {
        open.open('http://vigour.io', 'shawn')
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
