var css = require('sheetify')
var html = require('bel')

var styles = css`
  :host {
    background-color: blue;
    color: white;
  }
`

var el = html`
  <section class=${styles}>Howdy planet</section>
`

document.body.appendChild(el)
