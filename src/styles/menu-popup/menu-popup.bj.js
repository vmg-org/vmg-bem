/**
 * Popup wrap for menu view
 *    undeground blocks with highest z-index
 *    a close button after main view - to highest index priority
 *    a menu-popup class to open with JS and styles
 * @todo #33! hide a block by outer click; remove an effect
 */
module.exports = {
  block: 'menu-popup', 
  content: [{
    elem: 'space',
    content: ['_menu-view.bj.js', {
      elem: 'close',
      content: [{
        block: 'glyphicon',
        tag: 'span',
        mods: {
          q: 'remove-circle'
        }
      }]
    }]
  }]
};
