// undeground blocks with highest z-index
module.exports = [{
  block: 'pip-popup', // all popups under html
  mix: [{
    block: 'menu-popup' // to open with JS and new styles
  }, {
    block: 'hidden'
  }],
  content: [{
    elem: 'space',
    content: [{
      block: 'menu-view',
      content: [{
        elem: 'close',
        mix: [{
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
}];
