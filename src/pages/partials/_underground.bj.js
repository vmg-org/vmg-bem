// undeground blocks with highest z-index
module.exports = [{
  block: 'menu-popup', // to open with JS and styles
  attrs: {
    onclick: "app.hidePopupIfOut(this, event, 'menu-popup')"
  },
  content: [{
    block: 'pip-popup', // all popups under html
    content: [{
      elem: 'space',
      content: [{
        block: 'menu-view',
        content: [{
          elem: 'close',
          attrs: {
            onclick: "app.turnPopup(this, event, 'menu-popup')"
          },
          content: [{
            block: 'glyphicon',
            tag: 'span',
            mods: {
              q: 'remove-circle'
            }
          }]
        }, {
          elem: 'header',
          content: '%=menuTitle=%'
        }, {
          elem: 'list',
          content: 'super list with apps'
        }]
      }]
    }]
  }]
}];
