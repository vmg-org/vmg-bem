module.exports = {
  block: 'notif-row',
  bem: false,
  content: [{
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
  }]
};
