module.exports = {
  block: 'bsp-row',
  content: [{
    block: 'bsp-col',
    mods: {
      md: 12
    },
    content: [{
      block: 'notif-wrap',
      content: [{
        elem: 'close',
        attrs: {
          onclick: "app.hideElems(this, event, 'notif-wrap__notif');"
        },
        content: [{
          block: 'glyphicon',
          tag: 'span',
          mods: {
            q: 'remove'
          }
        }]
      }, {
        elem: 'notif'
      }]
    }]
  }]
};
