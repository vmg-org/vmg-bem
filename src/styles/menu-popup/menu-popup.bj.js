// undeground blocks with highest z-index
// todo: #33! hide a block by outer click; remove an effect
module.exports = {
  block: 'menu-popup', // to open with JS and styles
  content: [{
    elem: 'space',
    content: [{
      block: 'menu-view',
      content: [{
        elem: 'close',
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
};
